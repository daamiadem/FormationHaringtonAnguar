import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCReateComponent } from './produit-create.component';

describe('ProduitCReateComponent', () => {
  let component: ProduitCReateComponent;
  let fixture: ComponentFixture<ProduitCReateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitCReateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitCReateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
