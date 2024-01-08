import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ValidationErrors } from '@angular/forms';
import { Observable, filter, map, of } from 'rxjs';
import { ObjectConverterPipe } from './object-converter.pipe';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-control-messages',
  standalone: true,
  imports: [ObjectConverterPipe ,AsyncPipe],
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

  @Input({required : true})
  validationMessages : {key : string , message : string}[]  =[]

  parentContainer = inject(ControlContainer);

  errorKeys$: Observable<ValidationErrors | null> | undefined = of(null);

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
      this.errorKeys$ = formControl?.statusChanges.pipe(map(value=>{
        return formControl.errors
      }))
    }

  }

}
