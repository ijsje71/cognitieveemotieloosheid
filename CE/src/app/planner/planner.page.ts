import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.page.html',
  styleUrls: ['./planner.page.scss'],
})
export class PlannerPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public toDoList = [
    { val: 'Clean House', isChecked: true },
    { val: 'Write Proposal', isChecked: false },
    { val: 'Make Dentist Appointment', isChecked: false }
  ];

  public plannerDate = formatDate(new Date(), 'MMMM d, y', 'en');

  public plannerDates = [
    {
      date: formatDate(new Date(), 'MMMM d, y', 'en')
    }
  ]

  public appointments = [
    { val: 'Hang out with John', time: '12:00' },
      { val: 'Study', time: '14:00' },
      { val: 'Drinks with the old gang', time: '20:00' }
  ]

}

