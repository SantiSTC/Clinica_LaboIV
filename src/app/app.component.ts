import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './animaciones/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,  // Añade esta línea
  imports: [RouterOutlet],  // Importa aquí todos los componentes, directivas y pipes que uses
  template: `
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'Clinica Online';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}