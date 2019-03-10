import { FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

export class CustomValidators {
 public static dateControl(form: FormGroup): ValidationErrors {
   const dateControl: AbstractControl = form.get('date');
   if (dateControl) {
     const date: string = dateControl.value;
     const isDataValid: RegExpMatchArray = date.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i);

     const message: ValidationErrors =
        isDataValid
        ? undefined
        : {
            'date': {
              'message': 'Date format should be dd/mm/yyyy'
            }
          };

     return message;
   }
 }
}
