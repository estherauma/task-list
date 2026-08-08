import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.page').then( m => m.TasksPage)
  },
  {
    path: 'updated-tasks',
    loadComponent: () => import('./updated-tasks/updated-tasks.page').then( m => m.UpdatedTasksPage)
  },
];
