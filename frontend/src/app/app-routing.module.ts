import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAdotanteComponent } from './cadastrar-adotante/cadastrar-adotante.component';
import { CadastrarAnimalComponent } from './cadastrar-animal/cadastrar-animal.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { SobreEmpresaComponent } from './sobre-empresa/sobre-empresa.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AdocaoComponent } from './adocao/adocao.component';
import { RequisicoesComponent } from './requisicoes/requisicoes.component';
import { AnaliseAdocoesComponent } from './analise-adocoes/analise-adocoes.component'

const routes: Routes = [
  {path: '', component: TelaInicialComponent},
  {path: 'sobre', component: SobreEmpresaComponent},
  {path: 'cadastro_adotante', component: CadastrarAdotanteComponent},
  {path: 'cadastro_animais', component: CadastrarAnimalComponent},
  {path: 'funcionários', component: FuncionariosComponent},
  {path: 'funcionários/cadastro_animais', component: CadastrarAnimalComponent},
  {path: 'registrar_adocao', component: AdocaoComponent},
  {path: 'minhas_requisicoes', component: RequisicoesComponent},
  {path: 'funcionários/analise_adocoes', component: AnaliseAdocoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
