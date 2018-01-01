import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyphotoComponent } from './myphoto.component';

describe('MyphotoComponent', () => {
  let component: MyphotoComponent;
  let fixture: ComponentFixture<MyphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
