import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "bienvenida",
        loadComponent: () => import('./components/bienvenida/bienvenida.component').then(
            (m) => m.BienvenidaComponent,
        ),
    },
    {
        path: "login",
        loadComponent: () => import('./components/login/login.component').then(
            (m) => m.LoginComponent,
        ),
        data: { animation: 'isRight' }
    },
    {
        path: "signup",
        loadComponent: () => import('./components/signup/signup.component').then(
            (m) => m.SignupComponent,
        ),
        data: { animation: 'isLeft' }
    },
    {
        path: "usuarios",
        loadComponent: () => import('./components/usuarios/usuarios.component').then(
            (m) => m.UsuariosComponent,
        ),
        data: { animation: 'isRight' }
    },
    {
        path: "home",
        loadComponent: () => import('./components/home/home.component').then(
            (m) => m.HomeComponent,
        ),
        data: { animation: 'isRight' }
    },
    {
        path: "perfil/:dni",
        loadComponent: () => import('./components/perfil/perfil.component').then(
            (m) => m.PerfilComponent,
        ),
        data: { animation: 'isRight' }
    },
    {
        path: "agregar_hc/:paciente/:especialista/:fecha",
        loadComponent: () => import('./components/agregar-historia-clinica/agregar-historia-clinica.component').then(
            (m) => m.AgregarHistoriaClinicaComponent,
        ),
        data: { animation: 'isRight' }
    },
    {
        path: "ver_hc/:paciente",
        loadComponent: () => import('./components/ver-historia-clinica/ver-historia-clinica.component').then(
            (m) => m.VerHistoriaClinicaComponent,
        ),
        data: { animation: 'isRight' }
    },
    {
        path: "",
        redirectTo: "bienvenida",
        pathMatch: "full",
    }
];
