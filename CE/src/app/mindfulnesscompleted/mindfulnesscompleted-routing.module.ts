import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MindfulnesscompletedPage } from './mindfulnesscompleted.page';

const routes: Routes = [
  {
    path: '',
    component: MindfulnesscompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MindfulnesscompletedPageRoutingModule {}
