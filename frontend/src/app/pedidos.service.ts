import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos:any[] = [];
  constructor() {
    this.pedidos = [];
  }

  adicionarPedidos(pedidos:any) {
    this.pedidos = pedidos;
    console.table(this.pedidos);
  }

  async pegarPedidos() {
    try {
      let response = await fetch("http://localhost:3000/registrar_pedidos")
      this.pedidos = await response.json();
      // console.log(this.pedidos[0]["__zone_symbol__value"]);
      // this.pedidos[0] = this.pedidos[0]["__zone_symbol__value"]

      // if (this.pedidos[0].length == 0) {
      //   console.log(this.pedidos)
      //   this.pedidos = this.pedidos.splice(1, 1);
      // }
      console.log(this.pedidos);
      this.pedidos.shift();
      console.log(this.pedidos);
      this.pedidos = [...this.pedidos]
    } catch (err) {
      if (err) { throw err }
    }

    return [...this.pedidos];
  }

  async postarPedidos(pedidos:any) {
    try {
      let response = await fetch("http://localhost:3000/registrar_pedidos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedidos)
      })
      let dado = await response;
    } catch {
      console.log("ERRO AO POSTAR PEDIDOS")
    }
  }
}
