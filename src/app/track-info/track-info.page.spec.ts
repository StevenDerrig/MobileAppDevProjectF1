import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackInfoPage } from './track-info.page';

describe('TrackInfoPage', () => {
  let component: TrackInfoPage;
  let fixture: ComponentFixture<TrackInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
