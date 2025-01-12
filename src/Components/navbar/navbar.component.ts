import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenu: boolean = true;
  showNav() {
    this.isMenu = !this.isMenu;
  }

  navToSection(section: string) {
    const sec = document.querySelector(`#${section}`);
    if (sec) {
      const targetPosition = sec.getBoundingClientRect().top + window.scrollY; // Target position in the document
      const startPosition = window.scrollY; // Current scroll position
      const distance = targetPosition - startPosition; // Distance to scroll
      const duration = 500; // Duration of the scroll in milliseconds
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = easeInOutQuad(progress / duration); // Calculate easing
        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          requestAnimationFrame(step); // Continue scrolling
        }
      };

      requestAnimationFrame(step); // Start animation
    }

    function easeInOutQuad(t: number): number {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // Easing function
    }
  }
}
