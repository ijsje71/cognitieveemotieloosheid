import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}


  public toDoList = [
    { val: 'Clean House', isChecked: true },
    { val: 'Write Proposal', isChecked: false },
    { val: 'Make Dentist Appointment', isChecked: false }
  ];

  public plannerDates = [
    {
      date: formatDate(new Date(), 'MMMM d, y', 'en')
    }
  ]
  public appointments = [
    { val: 'Hang out with John', time: '12:00' }
  ]

  public navigatePlanner = function () {
    this.router.navigate(['./planner']);
  }

  public navigateMindfulness = function() {
    this.router.navigate(['./mindfulness']);
  }
}
