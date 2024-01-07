import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export interface ControlMessageValidators {
    controlName: string,
    validators: ((control:AbstractControl) =>ValidationErrors | null)[]
}
