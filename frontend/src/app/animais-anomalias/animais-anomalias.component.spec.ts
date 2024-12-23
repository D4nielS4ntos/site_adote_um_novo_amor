import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaisAnomaliasComponent } from './animais-anomalias.component';

describe('AnimaisAnomaliasComponent', () => {
  let component: AnimaisAnomaliasComponent;
  let fixture: ComponentFixture<AnimaisAnomaliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimaisAnomaliasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaisAnomaliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
