import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  dni!: any;
  email: string = '';
  isAuthenticated: boolean = false;
  private userSubscription: Subscription = new Subscription();

  private subscriptions: Subscription[] = [];

  user: any;

  cerrandoSesion: boolean = false;

  usuarios: any[] = [];
  historiaClinica: any[] = [];

  private clinicLogo = '/assets/clinica.png';

  constructor( private auth: AuthService, private firestore: FirestoreService, private router: Router, private activatedRoute: ActivatedRoute ) {}

  irAHistoriaClinico() {
    this.router.navigate(['ver_hc', this.user.dni]);
  }

  generatePDF() {
    const doc = new jsPDF();
  
    // Agregar logo
    const logo = new Image();
    logo.src = this.clinicLogo;
  
    if (logo) {
      doc.addImage(logo, 'PNG', 10, 18, 25, 25);
    }
  
    // Título e información de la historia clínica
    doc.setFontSize(18);
    doc.text('Historia Clínica', 50, 25);
    doc.setFontSize(12);
    doc.text(`Paciente: ${this.getNombreDelPaciente(this.user.dni)}`, 50, 35);
    doc.text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, 50, 42);
  
    // Inicializar la posición Y
    let yPos = 60;

    // Agregar datos de la historia clínica
    this.historiaClinica.forEach((item, index) => {      
      doc.setFontSize(14);
      doc.text(`Registro ${this.historiaClinica.length - index}`, 10, yPos);
      yPos += 10;
  
      doc.setFontSize(12);
      doc.text(`Especialista: ${this.getNombreDelEspecialista(item.especialistaDni)}`, 10, yPos);
      yPos += 7;
      doc.text(`Fecha: ${item.fecha}`, 10, yPos);
      yPos += 7;
      doc.text(`Peso: ${item.peso}`, 10, yPos);
      yPos += 7;
      doc.text(`Altura: ${item.altura}`, 10, yPos);
      yPos += 7;
      doc.text(`Temperatura: ${item.temperatura}`, 10, yPos);
      yPos += 7;
      doc.text(`Presión: ${item.presion}`, 10, yPos);
      yPos += 10;
  
      if (item.datosDinamicos && Object.keys(item.datosDinamicos).length > 0) {
        Object.entries(item.datosDinamicos).forEach(([clave, valor]) => {
          doc.text(`${clave}: ${valor}`, 10, yPos);
          yPos += 7;
        });
      }

      doc.line(10, yPos, 200, yPos);
      yPos += 10; // Espacio entre registros
  
      // Si la página está llena, añadir una nueva
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
    });
  
    // Descargar PDF
    let nombreArchivo = "Historia_Clinica_" + this.dni + ".pdf" 
    doc.save(nombreArchivo);
  }

  ngOnInit() {
    this.dni = this.activatedRoute.snapshot.paramMap.get('dni');

    this.userSubscription = this.auth.userActual$.subscribe(
      (user) => {
        this.isAuthenticated = !!user;
        this.email = user?.email || '';
      }
    );

    this.subscriptions.push(
      this.firestore.traer('usuarios').subscribe((data) => {
        this.usuarios = data;
        let usuarios = data;
  
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].email === this.email) {
            this.user = usuarios[i];
            break;
          }
        }

        if(this.user.dni != this.dni) {
          this.router.navigate(['perfil', this.user.dni]);
        }
      })
    );

    this.subscriptions.push(
      this.firestore.traer(`historia_clinica/${this.dni}/datos`).subscribe((data) => {
        if(data != null && data != undefined) {
          this.historiaClinica = data;
          this.historiaClinica.forEach((item, index) => {
            console.log(`Datos dinámicos del item ${index}:`, item.datosDinamicos);
          });
        } else {
          console.log("DATA DE HISTORIA CLINICA = NULL");
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getNombreDelEspecialista(dni: string): string {
    let nombre = '';
    this.usuarios.forEach(element => {
      if(element.type == 'especialista' && element.dni == dni) {
        nombre = element.name + " " + element.lastname;
      }
    })

    return nombre;
  }

  getNombreDelPaciente(dni: string) {
    let nombre = '';
    this.usuarios.forEach(element => {
      if((element.type == 'paciente' || element.type == 'admin') && element.dni == dni) {
        nombre = element.name + " " + element.lastname;
      }
    })

    return nombre;
  }

  toggleCerrandoSesion() {
    this.cerrandoSesion = !this.cerrandoSesion;
  }

  cerrarSesion() {
    this.auth.logout();
    this.router.navigateByUrl("login");
  }
}
