import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-mathijs',
  templateUrl: './home-mathijs.page.html',
  styleUrls: ['./home-mathijs.page.scss'],
})
export class HomeMathijsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public toDoList = [
    
  ]

  public plannerDate = formatDate(new Date(), 'MMMM d, y', 'en');

  public plannerDates = [
    
  ]

  public appointments = [
    
  ]  

  public navigateMindfulness = function() {
    this.router.navigate(['./mindfulness']);
  }

}
