import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export interface ControlMessageSettings {
    controlName: string,
    validators: ControlMessageValidators[]
}

export interface ControlMessageValidators {

    key: string,
    validatorFn: ((control: AbstractControl) => ValidationErrors | null),
    message: string
}
