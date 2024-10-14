import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPagesComponent } from './all-pages.component';

describe('AllPagesComponent', () => {
  let component: AllPagesComponent;
  let fixture: ComponentFixture<AllPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
