import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepagePageModule)
  },
  {
    path: 'create-forum-page',
    loadChildren: () => import('./create-forum-page/create-forum-page.module').then(m => m.CreateForumPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: 'user-page',
    loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
