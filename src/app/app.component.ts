import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'
import { FormComponent } from './form/form.component';
import { DirectivesComponent } from './directives/directives.component';


// decorator: tell AngularJS what to do with the class itself
@Component({
  selector: 'app-root',
  imports: [HomeComponent, FormComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
}
