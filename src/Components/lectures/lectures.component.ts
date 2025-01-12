import { Component } from '@angular/core';

@Component({
  selector: 'app-lectures',
  standalone: true,
  imports: [],
  templateUrl: './lectures.component.html',
  styleUrl: './lectures.component.css',
})
export class LecturesComponent {
  goToAbuBakrSera() {
    window.open(
      'https://www.youtube.com/watch?v=shBBDL8_JnY&pp=ygU72LPZitix2Kkg2KPYqNmIINio2YPYsSDYp9mE2LXYr9mK2YIg2LnYq9mF2KfZhiDYp9mE2K7ZhdmK2LM%3D',
      '_blank'
    );
  }
  goToOmarSera() {
    window.open(
      'https://www.youtube.com/watch?v=Z1-lD1JsSNY&pp=ygU72LPZitix2Kkg2LnZhdixINin2KjZhiDYp9mE2K7Yt9in2Kgg2LnYq9mF2KfZhiDYp9mE2K7ZhdmK2LM%3D',
      '_blank'
    );
  }
  goToOsmanSera() {
    window.open(
      'https://www.youtube.com/watch?v=IGK5NNkgehg&t=3s&pp=ygU72LPZitix2Kkg2LnZhdixINin2KjZhiDYp9mE2K7Yt9in2Kgg2LnYq9mF2KfZhiDYp9mE2K7ZhdmK2LM%3D',
      '_blank'
    );
  }
  goToBeSpecial() {
    window.open('https://www.youtube.com/watch?v=sR_uY1Az5PM', '_blank');
  }
  goToBeIslamEzza() {
    window.open('https://www.youtube.com/watch?v=QGQnmdiUQKI', '_blank');
  }
}
