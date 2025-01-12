import { Component, HostListener } from '@angular/core';

import { NavbarComponent } from '../Components/navbar/navbar.component';
import { HomeComponent } from '../Components/home/home.component';
import { HadethComponent } from '../Components/hadeth/hadeth.component';
import { LecturesComponent } from '../Components/lectures/lectures.component';
import { MoshphComponent } from '../Components/moshph/moshph.component';
import { PrayertimeComponent } from '../Components/prayertime/prayertime.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    HadethComponent,
    LecturesComponent,
    MoshphComponent,
    PrayertimeComponent,
    FooterComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
  isScroll: boolean = false;
  title = 'Hedaya_Site';
  navToTop() {
    const sec = document.querySelector('#Home');
    if (sec) {
      setTimeout(() => {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    scrollY > 320 ? (this.isScroll = true) : (this.isScroll = false);
  }
}
