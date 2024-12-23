import { Component } from '@angular/core';

@Component({
  selector: 'app-animais-anomalias',
  templateUrl: './animais-anomalias.component.html',
  styleUrl: './animais-anomalias.component.css'
})
export class AnimaisAnomaliasComponent {
  animais:any[] = [];
  anomalias:any[] = [];
  constructor() {
    this.animais = [];
    this.anomalias = [];
  }

  ngOnInit() {
    this.receberAnomalias();
    this.receberAnimais();
  }

  async receberAnimais() {
    let response = await fetch("http://localhost:3000/animais");
    this.animais = await response.json();
  }

  async receberAnomalias() {
    let response = await fetch("http://localhost:3000/anomalias");
    this.anomalias = await response.json()
    console.log(this.anomalias)
  }
}
