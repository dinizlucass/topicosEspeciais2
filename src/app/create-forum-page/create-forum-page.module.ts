import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CreateForumPage } from './create-forum-page.page'; // Verifique o caminho correto aqui

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateForumPage
      }
    ])
  ],
  declarations: [CreateForumPage]
})
export class CreateForumPageModule {}
