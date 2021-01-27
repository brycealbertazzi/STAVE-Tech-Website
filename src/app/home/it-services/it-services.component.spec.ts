import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITServicesComponent } from './it-services.component';

describe('ITServicesComponent', () => {
  let component: ITServicesComponent;
  let fixture: ComponentFixture<ITServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
