import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginComponentComponent } from './sigin-component.component';

describe('SiginComponentComponent', () => {
  let component: SiginComponentComponent;
  let fixture: ComponentFixture<SiginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiginComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
