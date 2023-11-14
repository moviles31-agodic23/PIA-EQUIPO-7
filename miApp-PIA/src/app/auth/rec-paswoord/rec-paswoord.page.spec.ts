import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecPaswoordPage } from './rec-paswoord.page';

describe('RecPaswoordPage', () => {
  let component: RecPaswoordPage;
  let fixture: ComponentFixture<RecPaswoordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecPaswoordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
