import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-animais',
  templateUrl: './tabela-animais.component.html',
  styleUrl: './tabela-animais.component.css'
})
export class TabelaAnimaisComponent {
  animais:any[] = []
  constructor() {
    this.animais = this.animais
  }

  ngOnInit() {
    fetch("http://localhost:3000/animais")
    .then(res => res.json())
    .then(dado => {
      this.animais = [...dado]
      console.log(this.animais)
    })
    .catch(err => console.log(err))
  }
}
