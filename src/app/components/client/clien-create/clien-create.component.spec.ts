import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienCreateComponent } from './clien-create.component';

describe('ClienCreateComponent', () => {
  let component: ClienCreateComponent;
  let fixture: ComponentFixture<ClienCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
