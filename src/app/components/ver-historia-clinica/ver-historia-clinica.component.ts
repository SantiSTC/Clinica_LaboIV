import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HistoriaclinicaService } from '../../services/historiaclinica.service';
import { DynamicPropertyPipe } from '../../pipes/dynamic-property.pipe';
import { StorageService } from '../../services/storage.service';


interface DatosDinamicos {
  [key: string]: any;
}

interface historiaClinica {
  especialistaDni: string;
  fecha: string;
  peso: number;
  altura: number;
  temperatura: number;
  presion: string;
  datosDinamicos: Array<{ clave: string, valor: any }>;
}

@Component({
  selector: 'app-ver-historia-clinica',
  standalone: true,
  imports: [RouterLink, DynamicPropertyPipe],
  templateUrl: './ver-historia-clinica.component.html',
  styleUrl: './ver-historia-clinica.component.css'
})
export class VerHistoriaClinicaComponent {
  email: string = '';
  isAuthenticated: boolean = false;
  private userSubscription: Subscription = new Subscription();

  user: any;

  private subscriptions: Subscription[] = [];

  cerrandoSesion: boolean = false;

  pacienteDni!: any;

  historiaClinica: historiaClinica[] = [];

  usuarios: any[] = [];

  datosDinamicos: Array<{ clave: string, valor: any }> = [];

  constructor(private firestore: FirestoreService, private activatedRoute: ActivatedRoute, private auth:AuthService, private storage: StorageService, private router: Router, private hc: HistoriaclinicaService) {}

  ngOnInit() {
    this.pacienteDni = this.activatedRoute.snapshot.paramMap.get('paciente');

    this.userSubscription = this.auth.userActual$.subscribe(
      (user) => {
        this.isAuthenticated = !!user;
        this.email = user?.email || '';
      }
    );

    this.subscriptions.push(
      this.firestore.traer('usuarios').subscribe((data) => {
        this.usuarios = data;
  
        for (let i = 0; i < this.usuarios.length; i++) {
          if (this.usuarios[i].email === this.email) {
            this.user = this.usuarios[i];
            break;
          }
        }

        this.storage.obtenerFotosDelUsuario(this.user.type, this.user.dni.toString()).then((data) => {
          this.user.foto1 = data[0].url;
        });

        if(this.user.type == "paciente") {
          if(this.user.dni != this.pacienteDni) {
            this.router.navigate(['perfil', this.user.dni]);
          }
        }
      })
    )

    this.subscriptions.push(
      this.firestore.traer(`historia_clinica/${this.pacienteDni}/datos`).subscribe((data) => {
        if(data != null && data != undefined) {
          this.historiaClinica = data;
          console.log("Historia Clínica completa:", JSON.stringify(this.historiaClinica, null, 2));
          
          // Verifica la estructura de datosDinamicos para cada item
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

  getObjectKeys(obj: DatosDinamicos): string[] {
    return Object.keys(obj);
  }

  irAPerfil() {
    this.router.navigate(['perfil', this.user.dni]);
  }
  
  toggleCerrandoSesion() {
    this.cerrandoSesion = !this.cerrandoSesion;
  }

  cerrarSesion() {
    this.auth.logout();
    this.router.navigateByUrl("login");
  }

  ver(item: any) {
    console.log('Datos dinámicos del item:',  item);
  }
}
