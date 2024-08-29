import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPageEtrangerComponent } from './inscription-page-etranger.component';

describe('InscriptionPageEtrangerComponent', () => {
  let component: InscriptionPageEtrangerComponent;
  let fixture: ComponentFixture<InscriptionPageEtrangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionPageEtrangerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionPageEtrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
