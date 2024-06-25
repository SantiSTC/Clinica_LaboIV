import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  email: string = '';
  isAuthenticated: boolean = false;
  private userSubscription: Subscription = new Subscription();

  private subscriptions: Subscription[] = [];

  user: any;

  cerrandoSesion: boolean = false;

  constructor( private auth: AuthService, private firestore: FirestoreService, private router: Router ) {}

  ngOnInit() {
    this.userSubscription = this.auth.userActual$.subscribe(
      (user) => {
        this.isAuthenticated = !!user;
        this.email = user?.email || '';
      }
    );

    this.subscriptions.push(
      this.firestore.traer('usuarios').subscribe((data) => {
        let usuarios = data;
  
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].email === this.email) {
            this.user = usuarios[i];
            break;
          }
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  toggleCerrandoSesion() {
    this.cerrandoSesion = !this.cerrandoSesion;
  }

  cerrarSesion() {
    this.auth.logout();
    this.router.navigateByUrl("login");
  }
}
