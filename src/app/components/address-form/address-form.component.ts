import { Component, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
  viewProviders: [{
    provide: ControlContainer, useFactory: () =>
      inject(ControlContainer, { skipSelf: true })

  }]
})
export class AddressFormComponent implements OnInit {

  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup
      .addControl('address', new FormGroup({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        pinCode: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
      })
      )
  }
}
