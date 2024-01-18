import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  position = 'Student';
  work_experience = 0;
  email = 'cgc@gmail.com';
  website = 'www.CGC.com';
  phone = '507-541-4567';

  imageUrl:string='assets/cj.jpg';
  imageW: number = 200;
  imageH: number = 200;
}
