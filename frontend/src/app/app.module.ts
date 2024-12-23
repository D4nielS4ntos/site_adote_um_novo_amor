import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastrarAdotanteComponent } from './cadastrar-adotante/cadastrar-adotante.component';
import { CadastrarAnimalComponent } from './cadastrar-animal/cadastrar-animal.component';
import { AdocaoComponent } from './adocao/adocao.component';
import { TabelaAnimaisComponent } from './tabela-animais/tabela-animais.component';
import { AnimaisAnomaliasComponent } from './animais-anomalias/animais-anomalias.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { SobreEmpresaComponent } from './sobre-empresa/sobre-empresa.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { RequisicoesComponent } from './requisicoes/requisicoes.component';
import { AnaliseAdocoesComponent } from './analise-adocoes/analise-adocoes.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAdotanteComponent,
    CadastrarAnimalComponent,
    AdocaoComponent,
    TabelaAnimaisComponent,
    AnimaisAnomaliasComponent,
    TelaInicialComponent,
    SobreEmpresaComponent,
    FuncionariosComponent,
    RequisicoesComponent,
    AnaliseAdocoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
