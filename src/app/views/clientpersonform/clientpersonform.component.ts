import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Authenticationformvalid } from 'src/app/validators/authenticationformvalid';
import { Authentication } from 'src/app/models/authentication';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientpersonform',
  templateUrl: './clientpersonform.component.html',
  styleUrls: ['./clientpersonform.component.scss']
})
export class ClientpersonformComponent implements OnInit {
  authenticationform: FormGroup;
  token;
  constructor(
    private authenticationformvalid: Authenticationformvalid,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.authenticationform = this.authenticationformvalid.formAuthentication;
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.authenticationform.valid) {
      if (this.authenticationform.get('iduser').value == null) {
        const newAuthentication: Authentication = {
          cedula: this.authenticationform.get('cedula').value,
          nombre: this.authenticationform.get('nombre').value,
          apellido: this.authenticationform.get('apellido').value,
          email: this.authenticationform.get('email').value,
          password: this.authenticationform.get('password').value,
        };
        this.authenticationService.onSaveAuthentication(newAuthentication).subscribe(
          res => {
            console.log(res);
            this.token = res['token'];
            localStorage.setItem('token', this.token);
            this.router.navigate(['/girl']);
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  }


}
