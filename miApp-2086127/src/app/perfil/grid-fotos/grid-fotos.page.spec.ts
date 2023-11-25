import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridFotosPage } from './grid-fotos.page';

describe('GridFotosPage', () => {
  let component: GridFotosPage;
  let fixture: ComponentFixture<GridFotosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GridFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
