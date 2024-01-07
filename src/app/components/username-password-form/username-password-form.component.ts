import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlMessagesComponent } from '../control-messages/control-messages.component';
import { ControlMessageValidators } from '../reusable-form';


@Component({
  selector: 'app-username-password-form',
  standalone: true,
  imports: [ReactiveFormsModule, ControlMessagesComponent],
  templateUrl: './username-password-form.component.html',
  styleUrl: './username-password-form.component.scss',
  viewProviders: [{
    provide: ControlContainer, useFactory: () =>
      inject(ControlContainer, { skipSelf: true })
  }]
})
export class UsernamePasswordFormComponent implements OnInit {


  @Input()
  validators: ControlMessageValidators[] = []

  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    let userNameValidators = this.validators.find((i) => i.controlName == 'username')?.validators
    if (!userNameValidators) {
      userNameValidators = [];
    }
    let passwordValidators = this.validators.find((i) => i.controlName == 'password')?.validators
    if (!passwordValidators) {
      passwordValidators = [];
    }
    this.parentFormGroup
      .addControl('username', new FormControl('',userNameValidators));
    this.parentFormGroup
          .addControl('password', new FormControl('', passwordValidators));

  }


  ngOnDestroy() {
    this.parentFormGroup.removeControl('username');
    this.parentFormGroup.removeControl('password');
  }
}
