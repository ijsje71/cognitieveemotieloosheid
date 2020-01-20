import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MindfulnessexercisePage } from './mindfulnessexercise.page';

const routes: Routes = [
  {
    path: '',
    component: MindfulnessexercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MindfulnessexercisePageRoutingModule {}
