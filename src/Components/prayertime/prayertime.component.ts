import { Component, OnInit } from '@angular/core';
import { IprayerContentService } from '../../Services/iprayer-content.service';
import { map } from 'rxjs';
import { Prayer } from '../../models/prayer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prayertime',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './prayertime.component.html',
  styleUrl: './prayertime.component.css',
})
export class PrayertimeComponent implements OnInit {
  iprayerTime: Prayer = {} as Prayer;

  constructor(private _iprayerSer: IprayerContentService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._iprayerSer
      .getAll()
      .pipe(
        map((res) => res.data),
        map((res) => res.timings)
      )
      .subscribe((res) => {
        this.iprayerTime = res;
      });
  }
}
