import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMathijsPage } from './home-mathijs.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMathijsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMathijsPageRoutingModule {}
