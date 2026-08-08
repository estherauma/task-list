import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatedTasksPage } from './updated-tasks.page';

describe('UpdatedTasksPage', () => {
  let component: UpdatedTasksPage;
  let fixture: ComponentFixture<UpdatedTasksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
