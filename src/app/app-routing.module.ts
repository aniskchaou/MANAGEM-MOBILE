import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'my-projects',
    loadChildren: () => import('./my-projects/my-projects.module').then(m => m.MyProjectsPageModule)
  },
  {
    path: 'my-tasks',
    loadChildren: () => import('./my-tasks/my-tasks.module').then(m => m.MyTasksPageModule)
  },
  {
    path: 'my-messages',
    loadChildren: () => import('./my-messages/my-messages.module').then(m => m.MyMessagesPageModule)
  },
  {
    path: 'my-notes',
    loadChildren: () => import('./my-notes/my-notes.module').then(m => m.MyNotesPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
