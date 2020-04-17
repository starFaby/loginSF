import { Component, OnInit } from '@angular/core';
import { GirlService } from 'src/app/services/girl.service';
import { Girl } from 'src/app/models/girl';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.scss']
})
export class GirlComponent implements OnInit {
  arregloGirls: Girl[];
  constructor(private girlService: GirlService, private router: Router) { }

  ngOnInit() {
    this.onGetGirlAll();
  }
  onGetGirlAll() {
    this.girlService.onGetGirls().subscribe(
      res => {
        this.arregloGirls = res;
        console.log(this.arregloGirls);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401){
            this.router.navigate(['/login']);
          }

        }
      }
    );
  }
}
