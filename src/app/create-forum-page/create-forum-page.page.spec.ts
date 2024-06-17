import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateForumPagePage } from './create-forum-page.page';

describe('CreateForumPagePage', () => {
  let component: CreateForumPagePage;
  let fixture: ComponentFixture<CreateForumPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateForumPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
