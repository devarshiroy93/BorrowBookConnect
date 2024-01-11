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
export function passwordValidation(control: AbstractControl) {

    const regex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);

    if (!control.value) {
        return null
    }
    const value = regex.test(control.value);

    if (!value) {
        return {
            'password': true
        }
    }
    return null;
}