import { Component } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {
  form ={
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    mobileNumber:'',
    password:'',
    confirmPassword:'',
    country:'',
    city:'',
    pinCode:'',
    landMark:'',
  }
  integeRegex=/^\d+$/
  emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  passwordRegex ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'

  registrstionForm(){
console.log(this.form);

  }
}
