import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTreePageComponent } from './todo-tree-page.component';

describe('TodoTreePageComponent', () => {
  let component: TodoTreePageComponent;
  let fixture: ComponentFixture<TodoTreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
