import { Component } from '@angular/core';

@Component({
  selector: 'app-carousal2',
  templateUrl: './carousal2.component.html',
  styleUrl: './carousal2.component.css'
})
export class Carousal2Component {
   currentIndex = 0;
   slidesToShow = 3; 
  totalSlides = 6; 

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
