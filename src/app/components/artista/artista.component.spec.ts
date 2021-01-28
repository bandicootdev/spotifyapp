import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtistaComponent } from './artista.component';

describe('ArtistaComponent', () => {
  let component: ArtistaComponent;
  let fixture: ComponentFixture<ArtistaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
