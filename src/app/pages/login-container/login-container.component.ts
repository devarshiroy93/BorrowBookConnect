import { Component, OnInit } from '@angular/core';
import { UsernamePasswordFormComponent } from '../../components/username-password-form/username-password-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent, CardSettings } from '@devarshiroy93/easylib';


@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [UsernamePasswordFormComponent, ReactiveFormsModule, CardComponent],
  template: `
    <section class="login-container">
      <lib-card [settings]="cardSettings">
        <div body>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <app-username-password-form></app-username-password-form>
            <button class="btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </lib-card>
    <section>    
  `,
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent implements OnInit {


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
