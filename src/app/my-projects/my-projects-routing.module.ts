import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProjectsPage } from './my-projects.page';

const routes: Routes = [
  {
    path: '',
    component: MyProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProjectsPageRoutingModule {}
