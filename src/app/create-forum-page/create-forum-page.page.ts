import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum-page.page.html',
  styleUrls: ['./create-forum-page.page.scss'],
})
export class CreateForumPage {
  forum = {
    title: '',
    description: '',
    imageUrl: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Novo fórum criado:', this.forum);
    this.router.navigate(['/']);
  }
}
