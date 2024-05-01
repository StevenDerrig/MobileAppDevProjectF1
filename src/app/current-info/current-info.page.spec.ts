import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentInfoPage } from './current-info.page';

describe('CurrentInfoPage', () => {
  let component: CurrentInfoPage;
  let fixture: ComponentFixture<CurrentInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
