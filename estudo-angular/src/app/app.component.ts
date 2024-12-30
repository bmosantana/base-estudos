import { Component } from '@angular/core';
import { TesteComponent } from './teste/teste.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TesteComponent], //melhoria: melhorar esses imports com uma shared module
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudo-angular';
}
