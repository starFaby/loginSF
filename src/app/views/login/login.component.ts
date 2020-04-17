import { Component, OnInit } from '@angular/core';
import { Signinformvalid } from 'src/app/validators/signinformvalid';
import { Signin } from 'src/app/models/signin';
import { FormGroup } from '@angular/forms';
import { SigninService } from 'src/app/services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formSignIn: FormGroup;
  token;
  id;
  constructor(
    private signinformvalid: Signinformvalid,
    private signinService: SigninService,
    private router: Router) {
    this.formSignIn = this.signinformvalid.formSignIn;
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.formSignIn.valid) {
      const newSignin: Signin = {
        email: this.formSignIn.get('email').value,
        password: this.formSignIn.get('password').value
      };
      this.signinService.onSaveSignin(newSignin).subscribe(
        res => {
          this.id = res['id'];
          localStorage.setItem('id', this.id);
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
