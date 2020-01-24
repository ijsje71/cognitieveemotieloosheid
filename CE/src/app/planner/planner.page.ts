import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.page.html',
  styleUrls: ['./planner.page.scss'],
})
export class PlannerPage implements OnInit {


  nextdate: Date;
  constructor() { }
  public test;

  public formatTest;
  
  
  ngOnInit() {
  this.test = new Date()
  this.test.setDate(this.test.getDate() +1);
    this.formatTest = formatDate(this.test, 'MMMM d, y', 'en');
    console.log(this.formatTest);
  }


  

  public toDoList = [
    { val: 'Clean House', isChecked: true },
    { val: 'Write Proposal', isChecked: false },
    { val: 'Make Dentist Appointment', isChecked: false }
  ];

  public plannerDate = formatDate(new Date(), 'MMMM d, y', 'en');
  // public plannerDate2 = formatDate(this.test, 'MMMM d, y', 'en');

  public plannerDates = [
    {
      date: this.plannerDate
    }
  ]

  public appointments = [
    { val: 'Hang out with John', time: '12:00' },
      { val: 'Study', time: '14:00' },
      { val: 'Drinks with the old gang', time: '20:00' }
  ]

}

