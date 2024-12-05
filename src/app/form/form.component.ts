import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isDisabled: boolean = false;
  imageSrc: string = 'wallpaper.png'
  display() {
    alert('Click event is triggered');
  }
}
