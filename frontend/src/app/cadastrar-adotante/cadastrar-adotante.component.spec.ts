import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarAdotanteComponent } from './cadastrar-adotante.component';

describe('CadastrarAdotanteComponent', () => {
  let component: CadastrarAdotanteComponent;
  let fixture: ComponentFixture<CadastrarAdotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarAdotanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAdotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
