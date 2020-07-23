import { Component } from '@angular/core';
import { libTwo } from '@nx-monorepo/lib2';

@Component({
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `app2 depends on ${libTwo}`;
}
