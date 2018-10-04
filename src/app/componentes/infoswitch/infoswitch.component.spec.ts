import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoswitchComponent } from './infoswitch.component';

describe('InfoswitchComponent', () => {
  let component: InfoswitchComponent;
  let fixture: ComponentFixture<InfoswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
