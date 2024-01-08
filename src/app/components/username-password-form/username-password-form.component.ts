import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlMessagesComponent } from '../control-messages/control-messages.component';
import { ControlMessageSettings, ControlMessageValidators } from '../reusable-form';
import { ValidationMessageTransformPipe } from './validation-message-transform.pipe';


@Component({
  selector: 'app-username-password-form',
  standalone: true,
  imports: [ReactiveFormsModule, ControlMessagesComponent , ValidationMessageTransformPipe],
  templateUrl: './username-password-form.component.html',
  styleUrl: './username-password-form.component.scss',
  viewProviders: [{
    provide: ControlContainer, useFactory: () =>
      inject(ControlContainer, { skipSelf: true })
  }]
})
export class UsernamePasswordFormComponent implements OnInit {


  @Input()
  validators: ControlMessageSettings[] = []

  parentContainer = inject(ControlContainer);

  validationMessages: { key: string, message: string }[] = []

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    let userNameValidators = this.validators.find((i) => i.controlName == 'username')?.validators.map(i => i.validatorFn)
    if (!userNameValidators) {
      userNameValidators = [];
    }
    let passwordValidators = this.validators.find((i) => i.controlName == 'password')?.validators.map(i => i.validatorFn)
    if (!passwordValidators) {
      passwordValidators = [];
    }
    this.parentFormGroup
      .addControl('username', new FormControl('', userNameValidators));
    this.parentFormGroup
      .addControl('password', new FormControl('', passwordValidators));

    
  }


  ngOnDestroy() {
    this.parentFormGroup.removeControl('username');
    this.parentFormGroup.removeControl('password');
  }
}
