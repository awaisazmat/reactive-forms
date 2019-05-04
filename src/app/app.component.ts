import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerationForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl('')
  })

  
}
