import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPageVisComponent } from './inscription-page-vis.component';

describe('InscriptionPageVisComponent', () => {
  let component: InscriptionPageVisComponent;
  let fixture: ComponentFixture<InscriptionPageVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionPageVisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionPageVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
