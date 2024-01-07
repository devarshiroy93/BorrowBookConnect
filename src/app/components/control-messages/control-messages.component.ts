import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-control-messages',
  standalone: true,
  imports: [],
  templateUrl: './control-messages.component.html',
  styleUrl: './control-messages.component.scss',
  viewProviders: [{
    provide: ControlContainer,
    useFactory: () => inject(ControlContainer, { skipSelf: true })
  }]
})
export class ControlMessagesComponent implements OnInit {

  

  @Input({ required: true })
  controlName: string = '';

  parentContainer = inject(ControlContainer);

  errorKeys: string[] = [];

  ngOnInit(): void {
    console.log(this.parentContainer);
    this.checkForParentFormErrors();
  }

  get parentForm() {
    return this.parentContainer as FormGroupDirective
  }

  checkForParentFormErrors() {


    if (this.controlName) {
      const formControl = this.parentForm.form.get(this.controlName);
      formControl?.statusChanges.pipe().subscribe(value => {
        console.log(value);
        console.log(formControl.errors)
      })
    }

  }

}
