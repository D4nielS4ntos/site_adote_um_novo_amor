import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-empresa',
  templateUrl: './sobre-empresa.component.html',
  styleUrl: './sobre-empresa.component.css'
})
export class SobreEmpresaComponent {
  images: string[] = [
    'https://i.pinimg.com/736x/68/fa/f5/68faf52ada4b5482a69cd4c4e8d17f6a.jpg',
    'https://i.pinimg.com/736x/ea/46/96/ea46966382267ba2c7cc0a16f03c7e1c.jpg',
    'https://i.pinimg.com/736x/59/85/77/598577585540de1b93ef8264bfc88556.jpg'
  ];

  currentIndex: number = 0;

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  } 
}
