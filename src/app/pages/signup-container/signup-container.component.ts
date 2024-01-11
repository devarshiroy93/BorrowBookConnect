import { Component, OnInit } from '@angular/core';
import { CardComponent, CardSettings } from '@devarshiroy93/easylib';
import { UsernamePasswordFormComponent } from '../../components/username-password-form/username-password-form.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressFormComponent } from '../../components/address-form/address-form.component';
import { ControlMessageSettings, passwordValidation } from '../../components/reusable-form';

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

  validators: ControlMessageSettings[] = [{
    controlName: 'username',
    validators: [
      { key: 'email', validatorFn: Validators.email, message: 'Should be in valid email format' },
      { key: 'required', validatorFn: Validators.required, message: 'This field is required' }]
  },
  {
    controlName: 'password',
    validators: [{
      key: 'password',
      validatorFn: passwordValidation,
      message: 'Should support in below format'
    },
    {
      key: 'required',
      validatorFn: Validators.required,
      message: 'This field is required'
    }]
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
