import { Component } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  standalone: true,
  imports: [],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  scrollToFavourites() {
    const percentage = 55; // Puedes ajustar el porcentaje aquí
    const windowHeight = window.innerHeight;
    const scrollAmount = (percentage / 100) * (document.body.scrollHeight - windowHeight);
    window.scrollTo(0, scrollAmount);
  }

}
