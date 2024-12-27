import { Component } from '@angular/core';
import { TesteComponent } from './teste/teste.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudo-angular';
}
