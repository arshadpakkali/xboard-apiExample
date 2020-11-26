import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificatonMenuComponent } from './notificaton-menu.component';

describe('NotificatonMenuComponent', () => {
  let component: NotificatonMenuComponent;
  let fixture: ComponentFixture<NotificatonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificatonMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificatonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
