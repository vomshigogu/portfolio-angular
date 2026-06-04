import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports:[CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects implements OnInit {

  index1 = 0;
  index2 = 0;

  selectedImage: string | null = null;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {

      this.index1 = (this.index1 + 1) % 3; // OLc images
      this.index2 = (this.index2 + 1) % 4; // EMP images

    }, 3000);
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}