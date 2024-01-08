import { Component, OnInit } from '@angular/core';
import { UsernamePasswordFormComponent } from '../../components/username-password-form/username-password-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent, CardSettings } from '@devarshiroy93/easylib';
import { ControlMessagesComponent } from '../../components/control-messages/control-messages.component';
import { ControlMessageSettings } from '../../components/reusable-form';


@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [UsernamePasswordFormComponent, ReactiveFormsModule, CardComponent, ControlMessagesComponent],
  template: `
    <section class="login-container">
      <lib-card [settings]="cardSettings">
        <div body>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <app-username-password-form [validators]="validators"></app-username-password-form>
            <button class="btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </lib-card>
    <section>    
  `,
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent implements OnInit {

  validators: ControlMessageSettings[] = [{
    controlName: 'username',
    validators: [
      { key: 'email', validatorFn: Validators.email, message: 'Should be in valid email format' },
      { key: 'required', validatorFn: Validators.required, message: 'This field is required' }]
  },
  {
    controlName: 'password',
    validators: [{
      key: 'pattern',
      validatorFn: Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
      message: 'Should support in below format'
    },
    {
      key: 'required',
      validatorFn: Validators.required,
      message: 'This field is required'
    }]
  }];

  constructor() {

  }
  loginForm!: FormGroup;


  ngOnInit(): void {
    this.loginForm = new FormGroup({})
  }

  onSubmit() {
    console.log(this.loginForm.value)
  }

  cardSettings: CardSettings = {
    headerText: 'Login',
  }
}
