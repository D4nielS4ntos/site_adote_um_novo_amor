import { Component } from '@angular/core';
import { Pedido } from '../adocao/pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrl: './adocao.component.css'
})
export class AdocaoComponent {
  animais:any[] = [];
  adotantes:any[] = [];
  pedidos:any[] = [];
  animal:any;
  ps:PedidosService;
  constructor(ps:PedidosService) {
    this.adotantes = this.adotantes;
    this.animais = this.animais;
    this.ps = ps;
    this.pedidos = ps.pedidos;
  }

  ngOnInit() {
    this.receberAnimais(null, null);
    this.receberAdotantes();
  }

  filtrarTabela(nomeAnimal:any, racaAnimal:any) {
    this.receberAnimais(nomeAnimal, racaAnimal);
  }

  async receberAdotantes() {
    let response = await fetch(`http://localhost:3000/adotantes`);
    this.adotantes = await response.json();
    // console.log(this.adotantes);
  }

  async receberAnimais(nomeAnimal:string|null, racaAnimal:string|null) {
    console.log(nomeAnimal, racaAnimal)
    if (nomeAnimal == null) {
      nomeAnimal = "";
    }
    if (racaAnimal == null) {
      racaAnimal = "";
    }
    // alert(nomeAnimal + racaAnimal)
    let response = await fetch(`http://localhost:3000/animais/filtrar?nome=${nomeAnimal}&raca=${racaAnimal}`)
    this.animais = await response.json();
    // console.log(this.animais);
    // alert(this.animais)
  }

  async buscarAdotantes(idAdotante:string|null) {
    // console.log(idAdotante);
    if (idAdotante == null) {
      console.log("não encontrado");
    } else {
      let response = await fetch(`http://localhost:3000/adotantes/${idAdotante}`);
      let result = await response.json();
      // this.adotante = result[0];
      // console.log(this.adotante);
      return result[0];
    }
  }

  async buscarAnimais(idAnimal:string|null) {
    // console.log(idAnimal);
    if (idAnimal == null) {
      console.log("não encontrado");
    } else {
      let response = await fetch(`http://localhost:3000/animais/${idAnimal}`);
      let result = await response.json();
      // alert("ID" + idAnimal + result)
      // alert(result[0])
      return result[0];
    }
  }

  async solicitarAdocao(idAdotante:any, cpf:string, idAnimal:any) {
    let adotante:any = await this.buscarAdotantes(idAdotante);
    let animal:any = await this.buscarAnimais(idAnimal);
    // console.log('CPF: '+ cpf);
    // console.log('Adotante CPF: '+ this.adotante["cpf"]);
    if (cpf == adotante["cpf"]) {
      alert("cpf bate, pedido enviado ");
      let pedido = new Pedido(adotante, animal, "Em análise");
      this.pedidos.push(pedido);
      this.ps.adicionarPedidos(this.pedidos);
    } else {
      alert("cpf não bate, pedido não enviado ");
    }
  }
}
