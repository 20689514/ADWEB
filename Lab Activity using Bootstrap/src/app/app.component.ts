import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iRoyale'; //used in interpolation
  orangeFont = "orange"; // style binding
  message: String = "Thank you for messaging. Please go to your email and wait for the reply"; //event binding (alert)

  showAlert() {
    alert(`${this.message}`);
  }
}
