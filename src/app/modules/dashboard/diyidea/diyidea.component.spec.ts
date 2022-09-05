import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIYideaComponent } from './diyidea.component';

describe('DIYideaComponent', () => {
  let component: DIYideaComponent;
  let fixture: ComponentFixture<DIYideaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIYideaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIYideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
