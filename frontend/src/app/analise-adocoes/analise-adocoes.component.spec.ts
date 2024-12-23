import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseAdocoesComponent } from './analise-adocoes.component';

describe('AnaliseAdocoesComponent', () => {
  let component: AnaliseAdocoesComponent;
  let fixture: ComponentFixture<AnaliseAdocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnaliseAdocoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseAdocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
