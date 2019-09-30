import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBeanComponent } from './file-bean.component';

describe('FileBeanComponent', () => {
  let component: FileBeanComponent;
  let fixture: ComponentFixture<FileBeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileBeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
