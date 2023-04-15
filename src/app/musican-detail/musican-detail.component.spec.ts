import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicanDetailComponent } from './musican-detail.component';

describe('MusicanDetailComponent', () => {
  let component: MusicanDetailComponent;
  let fixture: ComponentFixture<MusicanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicanDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
