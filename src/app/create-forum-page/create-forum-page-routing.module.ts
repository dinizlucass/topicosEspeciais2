import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateForumPagePage } from './create-forum-page.page';

const routes: Routes = [
  {
    path: '',
    component: CreateForumPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateForumPagePageRoutingModule {}
