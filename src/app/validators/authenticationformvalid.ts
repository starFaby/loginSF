import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Authenticationformvalid {
    formAuthentication: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.onValidatorAuthentication();
    }
onValidatorAuthentication() {
    this.formAuthentication = this.formBuilder.group({
        iduser: [null],
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
}
oninitializeFomrGroup() {
    this.formAuthentication.setValue({
        iduser: null,
        cedula: '',
        nombre: '',
        apellido: '',
        email: '',
        password: '',
    });
}
}
