import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MindfulnessexercisePageRoutingModule } from './mindfulnessexercise-routing.module';

import { MindfulnessexercisePage } from './mindfulnessexercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MindfulnessexercisePageRoutingModule
  ],
  declarations: [MindfulnessexercisePage]
})
export class MindfulnessexercisePageModule {}
