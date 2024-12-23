import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAnimaisComponent } from './tabela-animais.component';

describe('TabelaAnimaisComponent', () => {
  let component: TabelaAnimaisComponent;
  let fixture: ComponentFixture<TabelaAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaAnimaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
