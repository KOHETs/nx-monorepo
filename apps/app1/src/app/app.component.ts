import { Component } from '@angular/core';
import { libOne } from '@nx-monorepo/lib1';

@Component({
  selector: 'nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `app1 depends on ${libOne}`;
}
