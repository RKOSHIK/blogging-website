import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermmodaComponent } from './vermmoda.component';

describe('VermmodaComponent', () => {
  let component: VermmodaComponent;
  let fixture: ComponentFixture<VermmodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermmodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermmodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
