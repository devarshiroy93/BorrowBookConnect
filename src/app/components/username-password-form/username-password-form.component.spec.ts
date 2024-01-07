import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePasswordFormComponent } from './username-password-form.component';

describe('UsernamePasswordFormComponent', () => {
  let component: UsernamePasswordFormComponent;
  let fixture: ComponentFixture<UsernamePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernamePasswordFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernamePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
