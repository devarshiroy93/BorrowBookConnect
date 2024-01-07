import { Component, OnInit } from '@angular/core';
import { CardComponent, CardSettings } from '@devarshiroy93/easylib';
import { UsernamePasswordFormComponent } from '../../components/username-password-form/username-password-form.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressFormComponent } from '../../components/address-form/address-form.component';
import { ControlMessageValidators } from '../../components/reusable-form';

const LIBRARYCOMPONENTS = [CardComponent];
const CORE_MODULES = [ReactiveFormsModule];
const APP_COMPONENTS = [UsernamePasswordFormComponent, AddressFormComponent];

@Component({
  selector: 'app-signup-container',
  standalone: true,
  imports: [...LIBRARYCOMPONENTS, ...APP_COMPONENTS, ...CORE_MODULES],
  templateUrl: './signup-container.component.html',
  styleUrl: './signup-container.component.scss'
})
export class SignupContainerComponent implements OnInit {

  validators: ControlMessageValidators[] = [{
    controlName: 'username',
    validators: [Validators.email, Validators.required]
  },
  {
    controlName: 'password',
    validators: [Validators.email, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]
  }]

  cardSettings: CardSettings = {
    headerText: 'Signup',
  }

  registerForm!: FormGroup;


  ngOnInit(): void {
    this.registerForm = new FormGroup({})
  }

  // get addressLine1() : FormControl{
  //   return (this.registerForm.get('address.addressLine1')) as FormControl
  // }

  // get addressLine2() : FormControl{
  //   return (this.registerForm.get('address.addressLine2')) as FormControl
  // }
  // get city() : FormControl{
  //   return (this.registerForm.get('address.city')) as FormControl
  // }

  // get pinCode() : FormControl{
  //   return (this.registerForm.get('address.pinCode')) as FormControl
  // }

  // get state() : FormControl{
  //   return (this.registerForm.get('address.state')) as FormControl
  // }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
