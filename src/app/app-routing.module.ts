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
    path: '', // Rota padrão quando o path está vazio
    redirectTo: 'home', // Redireciona para a rota 'home'
    pathMatch: 'full'
  },
  {
    path: '**', // Rota para lidar com caminhos não correspondentes
    redirectTo: 'home' // Redireciona para a rota 'home' em caso de caminho não encontrado
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
