import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private logoutService: LogoutService,
    private router: Router,
    public signinService: SigninService) { }

  ngOnInit() {
  }
  onCloseLogout() {
    this.logoutService.onCloseLogout().subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      }
    );
  }

}
