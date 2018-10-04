import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosswitchComponent } from './juegosswitch.component';

describe('JuegosswitchComponent', () => {
  let component: JuegosswitchComponent;
  let fixture: ComponentFixture<JuegosswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
