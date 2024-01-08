import { Pipe, PipeTransform } from '@angular/core'
import { ControlMessageSettings, ControlMessageValidators } from '../reusable-form';
@Pipe({
    name: 'validationMessageTrnsf',
    standalone: true
})
export class ValidationMessageTransformPipe implements PipeTransform {

    transform(value: ControlMessageSettings[], controlName: string): { key: string, message: string }[] {
        const controlValidators: ControlMessageValidators[] | undefined = value.find(i => i.controlName === controlName)?.validators;

        if (!controlValidators) {
            return []
        }
        return controlValidators.map((i => {
            return {
                key: i.key,
                message: i.message
            }
        }))

    }
}