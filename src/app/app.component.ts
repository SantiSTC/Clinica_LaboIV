import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation, slideAnimation } from './animaciones/route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div [@slideAnimation]="outlet.isActivated ? outlet.activatedRoute : ''">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [fadeAnimation, slideAnimation]
})
export class AppComponent {
  title = 'Clinica Online';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
