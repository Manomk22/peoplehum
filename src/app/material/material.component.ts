import { Component } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  private currentIndex = 0;
  private readonly slidesToShow = 2; 
  private readonly totalSlides = 4; 

  prevSlide() {
    const slides = document.querySelector('.slider') as HTMLElement;
    const slideWidth = slides.children[0].clientWidth;
    
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalSlides - this.slidesToShow; 
    }

    slides.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
  }

  nextSlide() {
    const slides = document.querySelector('.slider') as HTMLElement;
    const slideWidth = slides.children[0].clientWidth;

    if (this.currentIndex < this.totalSlides - this.slidesToShow) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }

    slides.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
  }

}
