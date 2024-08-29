import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvPageComponent } from './cgv-page.component';

describe('CgvPageComponent', () => {
  let component: CgvPageComponent;
  let fixture: ComponentFixture<CgvPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgvPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
