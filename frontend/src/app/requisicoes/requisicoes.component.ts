import { Component } from '@angular/core';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrl: './requisicoes.component.css'
})
export class RequisicoesComponent {
  pedidosService:any[] = [];
  // ps:any;
  constructor(ps:PedidosService) {
    // this.ps = ps;
    this.pedidosService = ps.pedidos;
  }
  ngOnInit() {
    if (this.pedidosService.length == 0) {
      let table:any = document.querySelector("table tr td")
      table.innerHTML = "Nenhum dado disponível"
    }
  }
}
