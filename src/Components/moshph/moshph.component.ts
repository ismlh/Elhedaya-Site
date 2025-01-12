import { Component, OnInit } from '@angular/core';
import { IsuarhService } from '../../Services/isuarh.service';
import { map } from 'rxjs';
import { Isuarh } from '../../models/isuarh';
import { IsuarhContentService } from '../../Services/isuarh-content.service';
import { Iayah } from '../../models/iayah';

@Component({
  selector: 'app-moshph',
  standalone: true,
  imports: [],
  templateUrl: './moshph.component.html',
  styleUrl: './moshph.component.css',
})
export class MoshphComponent implements OnInit {
  suarhs: Isuarh[] = [] as Isuarh[];
  ayahs: Iayah[] = [] as Iayah[];

  constructor(
    private _suarhSer: IsuarhService,
    private _isuarhAyat: IsuarhContentService
  ) {}
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {

    this._suarhSer.getAll().subscribe(
      (res)=>{
        this.suarhs=res

      })

  }
  showPopup(number: number) {
    this._isuarhAyat
      .getSuarh(number)
      .pipe(
        map((res) => res.arabic1),
      )
      .subscribe((res) => {
        this.ayahs = res;

      });


    document.querySelector('#default-modal')?.classList.remove('hidden');
  }
  closePopup() {
    this.ayahs = [] as Iayah[];
    document.querySelector('#default-modal')?.classList.add('hidden');
  }
}
