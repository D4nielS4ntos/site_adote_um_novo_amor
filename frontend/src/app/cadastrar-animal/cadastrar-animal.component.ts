import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrl: './cadastrar-animal.component.css'
})
export class CadastrarAnimalComponent {
  adotantes:any[] = [];
  animais:any[] = [];
  anomalias:any[] = [];
  constructor() {
    this.animais = [];
    this.anomalias = [];
    this.adotantes = [];
  }

  ngOnInit() {
    this.receberAnimais();
    this.receberAdotantes();
    this.receberAnomalias();
  }

  cadastrarAnimal(nome:string, raca:string, peso:string, altura:string, status:string, descricao:string, adotante:number, nascimento:string, id_animal:string, id_anomalia:string) {
    console.log(nome,raca,peso,altura,status,descricao,adotante,nascimento,id_animal,id_anomalia)

    if (nome == "" || raca == "" || peso == "" || altura == "" || status == "" || descricao == "" || nascimento == "") {
      alert("Preencha todos os campos necessários")
    } else {
      alert("Animal cadastrado")
      fetch("http://localhost:3000/animais", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome,raca,peso,altura,status,descricao,adotante,nascimento})
      })
      .then(res => res.json())
      .catch(err => console.log(err))
    }

    fetch("http://localhost:3000/animais_anomalias", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({id_animal, id_anomalia})
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  async receberAnimais() {
    let response = await fetch("http://localhost:3000/animais");
    this.animais = await response.json();
  }

  async receberAdotantes() {
    let response = await fetch("http://localhost:3000/adotantes");
    this.adotantes = await response.json();
  }

  async receberAnomalias() {
    let response = await fetch("http://localhost:3000/anomalias");
    this.anomalias = await response.json()
  }
}
