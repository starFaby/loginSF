import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Girlformvali {
    formGirls: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.onValidatorCategoria();
    }
onValidatorCategoria() {
    this.formGirls = this.formBuilder.group({
        id: [null],
        title: ['', Validators.required],
        url: ['', Validators.required],
        description: ['', Validators.required],
        user_id: ['', Validators.required],
    });
}
oninitializeFomrGroup() {
    this.formGirls.setValue({
        id: null,
        title: '',
        url: '',
        description: '',
    });
}
}
