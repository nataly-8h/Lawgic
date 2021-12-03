import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeFormularioComponent } from './sube-formulario.component';

describe('SubeFormularioComponent', () => {
  let component: SubeFormularioComponent;
  let fixture: ComponentFixture<SubeFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubeFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
