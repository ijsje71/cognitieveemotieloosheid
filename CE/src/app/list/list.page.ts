import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

@Component({
  template: `
  <form (ngSubmit)="logForm()">
  <ion-item>
  <ion-label position="stacked">Username</ion-label>
  <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>
</ion-item>
<ion-item>
  <ion-label position="stacked">Password</ion-label>
  <ion-input pattern='password'></ion-input>
</ion-item>
      <button ion-button type="submit" block>Login</button>
    </form>
  `,
})

export class ListPage implements OnInit{

  constructor(public router: Router){}
  
  public imgSource = "/assets/brain.png";
  ngOnInit() {
  }
  
  private username;
  login = {}
  logForm() {
    if (this.username === "Mathijs") {
      console.log("great success");
      this.router.navigate(['./home']); 
    }
    
  }
  


  
}
