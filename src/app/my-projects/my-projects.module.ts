import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProjectsPageRoutingModule } from './my-projects-routing.module';

import { MyProjectsPage } from './my-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProjectsPageRoutingModule
  ],
  declarations: [MyProjectsPage]
})
export class MyProjectsPageModule {}
