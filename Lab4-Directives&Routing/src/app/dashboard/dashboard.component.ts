import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
showText: boolean = false;
toggleText() {
    this.showText = !this.showText;
  }

  //Table
  staff = [ 
    { firstName: 'Kobe', lastName: 'Braynt', email: 'kobe.bryant@test.com', role: 'User' },   
    { firstName: 'Lebron', lastName: 'James', email: 'lebron.james@test.com', role: 'Admin' }, 
    { firstName: 'Derick', lastName: 'Rose', email: 'derick.rose@test.com', role: 'Admin' }, 
    { firstName: 'Ja', lastName: 'Morant', email: 'ja.morant@test.com', role: 'User' }, 
    { firstName: 'Kevin', lastName: 'Durant', email: 'kevin.durant@test.com', role: 'User' } 
    ];
    

}
