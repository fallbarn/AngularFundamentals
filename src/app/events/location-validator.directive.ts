import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  // sle note: adds this directive class to the ng_validator service (inbuilt service), where
  // NG_VALIDATOR represents a list of validators
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi:true }]
})

export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {

    console.log("LocationValidator");

    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    // sle note: Navigating the DOM here (the parent of formGroup is also a form!)
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if ((addressControl && addressControl.value &&
        cityControl && cityControl.value &&
        countryControl && countryControl.value)
        || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      // sle note : a key pair matching { [key: string]: any}
      return { validateLocation: false }
    }
  }
}
