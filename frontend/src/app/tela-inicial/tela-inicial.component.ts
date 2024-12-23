import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {
  images: string[] = [
    'https://i.pinimg.com/736x/49/b5/91/49b591788a51779e700b40ae3926e00e.jpg',
    'https://i.pinimg.com/736x/fd/bc/15/fdbc15ca8a1a2df488a784c7a4bcf33b.jpg',
    'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/06/622367574-adocao-cachorro.jpg'
  ];

  currentIndex: number = 0;

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }
}
