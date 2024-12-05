import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Tien Dat Doan Viet" // interpolation, writing content into markup text
  university = "Ho Chi Minh City University of Techonology"

  counter: number = 0;
  increase() {
    this.counter++;
  }
}
