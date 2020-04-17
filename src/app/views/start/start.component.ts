import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Girlformvali } from 'src/app/validators/girlformvali';
import { GirlService } from 'src/app/services/girl.service';
import { Girl } from 'src/app/models/girl';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  formGirl: FormGroup;
  constructor(private girlformvali: Girlformvali, private girlService: GirlService) {
    this.formGirl = this.girlformvali.formGirls;
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.formGirl.valid) {
      if (this.formGirl.get('id').value == null) {
        const newGirl: Girl = {
          title: this.formGirl.get('title').value,
          url: this.formGirl.get('url').value,
          description: this.formGirl.get('description').value,
          iduser: this.formGirl.get('user_id').value,
        };
        this.girlService.onSaveGirl(newGirl).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  }

}
