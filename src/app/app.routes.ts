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
    },
    {
        path: "signup",
        loadComponent: () => import('./components/signup/signup.component').then(
            (m) => m.SignupComponent,
        ),
    },
    {
        path: "usuarios",
        loadComponent: () => import('./components/usuarios/usuarios.component').then(
            (m) => m.UsuariosComponent,
        ),
    },
    {
        path: "home",
        loadComponent: () => import('./components/home/home.component').then(
            (m) => m.HomeComponent,
        ),
    },
    {
        path: "",
        redirectTo: "bienvenida",
        pathMatch: "full",
    }
];
