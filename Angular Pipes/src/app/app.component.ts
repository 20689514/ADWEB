import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Text format pipe
  title = 'midterms';
  name = "Chrisjohn G. Crisostomo"
  section = " WD-301"

  //date pipe
  presentDate = new Date();
  time$: Observable<Date>;
  constructor(){
    this.time$ = interval(1000).pipe(map(() => new Date() ));
  }

  //currency pipe
  price : number = 20000; 

  //Slice pipe
  PL = ['Python', 'Java', 'Javascript', 'C++', 'C#'];

  //decimal pipe
  num1 : number = 0.8;
  num2 : number = .70; 
  num3: number = .40;
  num4: number = 340;



  //json pipe
  Profile: object = {
    profilename : 'Chrisjohn Crisostomo', age :'21', Work: 'Full-stack Developer'
    };

  BasiclevelLanguages: object = [
    {language: 'Python'},
    {language: 'Java'},
    {language: 'C++'}
  ];

  AdvancedlevelLanguages: object = [
    {language: 'Javascript'},
    {language: 'PHP'},
    {language: 'C#'}
  ]
    
  

  

  ngOnInit(){

  }

}