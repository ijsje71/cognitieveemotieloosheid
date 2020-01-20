import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindfulnessexercise',
  templateUrl: './mindfulnessexercise.page.html',
  styleUrls: ['./mindfulnessexercise.page.scss'],
})
export class MindfulnessexercisePage implements OnInit {

  progress = 0;  
  constructor() {  
    setInterval( () => {  
      this.progress += .0007;  
      }, 100 );  
  }  

  ngOnInit() {
  }

}
