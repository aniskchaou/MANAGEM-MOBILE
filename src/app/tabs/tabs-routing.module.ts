import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-projects',
        loadChildren: () => import('../my-projects/my-projects.module').then(m => m.MyProjectsPageModule)
      },
      {
        path: 'my-tasks',
        loadChildren: () => import('../my-tasks/my-tasks.module').then(m => m.MyTasksPageModule)
      },
      {
        path: 'my-messages',
        loadChildren: () => import('../my-messages/my-messages.module').then(m => m.MyMessagesPageModule)
      },
      {
        path: 'my-notes',
        loadChildren: () => import('../my-notes/my-notes.module').then(m => m.MyNotesPageModule)
      }, {
        path: 'my-account',
        loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/my-tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
