import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-adotante',
  templateUrl: './cadastrar-adotante.component.html',
  styleUrl: './cadastrar-adotante.component.css'
})
export class CadastrarAdotanteComponent {
Cadastrar(nome: string,cpf: string,genero: string, aniversario:string, contato:string,renda:string) {
  console.log(nome,cpf,genero,aniversario,contato,renda)
  if (nome == "" || cpf == "" || genero == "" || aniversario == "" || contato == "") {
    alert("Preencha todos os campos")
  } else {
    alert("Dados cadastrados")
    fetch("http://localhost:3000/adotantes", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({nome,cpf,genero,aniversario,contato,renda})
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    }
  }
}
