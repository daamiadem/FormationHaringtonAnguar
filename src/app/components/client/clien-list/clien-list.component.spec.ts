import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienListComponent } from './clien-list.component';

describe('ClienListComponent', () => {
  let component: ClienListComponent;
  let fixture: ComponentFixture<ClienListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
