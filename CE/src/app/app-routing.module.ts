import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'mindfulness',
    loadChildren: () => import('./mindfulness/mindfulness.module').then( m => m.MindfulnessPageModule)
  },
  {
    path: 'planner',
    loadChildren: () => import('./planner/planner.module').then( m => m.PlannerPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'mindfulnessexercise',
    loadChildren: () => import('./mindfulnessexercise/mindfulnessexercise.module').then( m => m.MindfulnessexercisePageModule)
  },
  {
    path: 'mindfulnesscompleted',
    loadChildren: () => import('./mindfulnesscompleted/mindfulnesscompleted.module').then( m => m.MindfulnesscompletedPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
