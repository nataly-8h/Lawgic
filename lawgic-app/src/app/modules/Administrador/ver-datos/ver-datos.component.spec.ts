import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDatosComponent } from './ver-datos.component';

describe('VerDatosComponent', () => {
  let component: VerDatosComponent;
  let fixture: ComponentFixture<VerDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
