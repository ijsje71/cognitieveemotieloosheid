import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MindfulnesscompletedPageRoutingModule } from './mindfulnesscompleted-routing.module';

import { MindfulnesscompletedPage } from './mindfulnesscompleted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MindfulnesscompletedPageRoutingModule
  ],
  declarations: [MindfulnesscompletedPage]
})
export class MindfulnesscompletedPageModule {}
