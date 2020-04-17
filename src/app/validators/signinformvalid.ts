import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Signinformvalid {
    formSignIn: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.onValidatorAuthentication();
    }
    onValidatorAuthentication() {
        this.formSignIn = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    oninitializeFomrGroup() {
        this.formSignIn.setValue({
            email: '',
            password: '',
        });
    }
}
