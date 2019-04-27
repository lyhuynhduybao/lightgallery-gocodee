import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GocodeeLightboxComponent } from './gocodee-lightbox.component';

describe('GocodeeLightboxComponent', () => {
  let component: GocodeeLightboxComponent;
  let fixture: ComponentFixture<GocodeeLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GocodeeLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GocodeeLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
