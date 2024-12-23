import { Component } from '@angular/core';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-analise-adocoes',
  templateUrl: './analise-adocoes.component.html',
  styleUrl: './analise-adocoes.component.css'
})
export class AnaliseAdocoesComponent {
  pedidosService:any[] = [];
  // ps:any;
  constructor(ps:PedidosService) {
    // this.ps = ps;
    this.pedidosService = ps.pedidos;
  }
  async ngOnInit() {
    // this.pedidosService = await this.ps.pegarPedidos();
    console.log(this.pedidosService);
    if (this.pedidosService.length == 0) {
      let table:any = document.querySelector("table tr td")
      table.innerHTML = "Nenhum dado disponível"
    }
  }
  negarAdocao(pedido:any) {
    pedido.status = "Negado";
  }
  async aprovarAdocao(pedido:any) {
    pedido.status = "Aprovado";
    let response = await fetch("http://localhost:3000/animais", {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({pedido})
    })
    let dado = await response.json()
  }
}
