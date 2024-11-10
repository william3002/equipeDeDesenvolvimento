import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoringaComponent } from './coringa.component';

describe('CoringaComponent', () => {
  let component: CoringaComponent;
  let fixture: ComponentFixture<CoringaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoringaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoringaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
