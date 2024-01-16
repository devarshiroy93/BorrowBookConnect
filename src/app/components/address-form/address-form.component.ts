import { Component, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent, DropdownSettings } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownComponent],
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

  options = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' }];

  cities = [{
    "id": "1",
    "name": "Mumbai",
    "state": "Maharashtra"
  },
  {
    "id": "2",
    "name": "Delhi",
    "state": "Delhi"
  },
  {
    "id": "3",
    "name": "Bengaluru",
    "state": "Karnataka"
  },
  {
    "id": "4",
    "name": "Ahmedabad",
    "state": "Gujarat"
  },
  {
    "id": "5",
    "name": "Hyderabad",
    "state": "Telangana"
  },
  {
    "id": "6",
    "name": "Chennai",
    "state": "Tamil Nadu"
  },
  {
    "id": "7",
    "name": "Kolkata",
    "state": "West Bengal"
  },
  {
    "id": "8",
    "name": "Pune",
    "state": "Maharashtra"
  },
  {
    "id": "9",
    "name": "Jaipur",
    "state": "Rajasthan"
  },
  {
    "id": "10",
    "name": "Surat",
    "state": "Gujarat"
  },
  {
    "id": "11",
    "name": "Lucknow",
    "state": "Uttar Pradesh"
  },
  {
    "id": "12",
    "name": "Kanpur",
    "state": "Uttar Pradesh"
  },
  {
    "id": "13",
    "name": "Nagpur",
    "state": "Maharashtra"
  }]

  dropDownSettings: DropdownSettings = {
    usage: 'default',
    options: this.options,
    bindKey: 'name',
    placeholder: 'Select country',
    trackBy: 'code'
  }

  customDropdownSettings: DropdownSettings = {
    usage: 'custom',
    placeholder: 'Select city',
    bindKey: 'name',
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

  onSelectOption(data: any) {

    console.log('data', data)
  }




}
