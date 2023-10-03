import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TapsPage } from './taps.page';

describe('TapsPage', () => {
  let component: TapsPage;
  let fixture: ComponentFixture<TapsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
