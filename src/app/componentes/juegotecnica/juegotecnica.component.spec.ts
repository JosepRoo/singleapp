import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegotecnicaComponent } from './juegotecnica.component';

describe('JuegotecnicaComponent', () => {
  let component: JuegotecnicaComponent;
  let fixture: ComponentFixture<JuegotecnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegotecnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegotecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
