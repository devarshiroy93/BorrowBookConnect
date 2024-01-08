import { Pipe, PipeTransform } from '@angular/core'
import { ValidationErrors } from '@angular/forms';

@Pipe({
    name: 'objConv',
    standalone: true
})
export class ObjectConverterPipe implements PipeTransform {

    transform(value: ValidationErrors | null | undefined, validationMessages: { key: string, message: string }[]): { key: string, message: string }[] {

        const keys = Object.keys(value || {});
        const messages = keys.map(key => {
            return {
                key,
                message: validationMessages.find(i => i.key === key)?.message || ''
            }
        })

        if (!value) {
            return []
        }
        console.log(messages);
        return messages
    }

}