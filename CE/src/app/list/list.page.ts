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
  <img src="/assets/icon/brain.png">

    <form (ngSubmit)="logForm()">
      <ion-item>
        <ion-label position="stacked">Username</ion-label>
        <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Password</ion-label>
        <ion-input pattern='password'></ion-input>
      </ion-item>
  <ion-button expand="block" type="submit">Login</ion-button>
  <ion-button expand="block">Create Account</ion-button>
  </form>
  `,
})

export class ListPage implements OnInit{

  constructor(public router: Router){}
  
  public imgSource = "/assets/brain.png";
  ngOnInit() {
  }
  
  public username;
  login = {}
  logForm() {
    if (this.username === "Bob") {
      this.router.navigate(['./home']); 
    } else if (this.username === "Mathijs") {
      this.router.navigate(["./home-mathijs"]);
    };
    
  };
  


  
}
