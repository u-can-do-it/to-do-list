import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoControllerComponent } from './todo-controller.component';

describe('TodoControllerComponent', () => {
  let component: TodoControllerComponent;
  let fixture: ComponentFixture<TodoControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
