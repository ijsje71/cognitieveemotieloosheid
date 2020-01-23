import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMathijsPageRoutingModule } from './home-mathijs-routing.module';

import { HomeMathijsPage } from './home-mathijs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMathijsPageRoutingModule
  ],
  declarations: [HomeMathijsPage]
})
export class HomeMathijsPageModule {}
