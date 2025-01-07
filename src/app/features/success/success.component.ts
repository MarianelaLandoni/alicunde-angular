import { Component, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent implements OnInit {
  private renderer2 = inject(Renderer2);
  private elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.surprise();
  }

  surprise(): void {

     const existingCanvas = this.elementRef.nativeElement.querySelector('canvas');
     if (existingCanvas) {
       this.renderer2.removeChild(this.elementRef.nativeElement, existingCanvas);
     }

     const canvas = this.renderer2.createElement('canvas');
     this.renderer2.appendChild(this.elementRef.nativeElement, canvas);


     const myConfetti = confetti.create(canvas, {
       resize: true,
     });

     myConfetti();
  }
}
