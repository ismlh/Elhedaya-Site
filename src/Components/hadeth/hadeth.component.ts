import { Component, OnInit } from '@angular/core';
import { IBook } from '../../models/ibook';
import { IBookService } from '../../Services/ibook.service';
import { map } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { IHadethService } from '../../Services/ihadeth.service';
import { IHadeth } from '../../models/ihadeth';

@Component({
  selector: 'app-hadeth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hadeth.component.html',
  styleUrl: './hadeth.component.css',
})
export class HadethComponent implements OnInit {
  Names: IBook[] = [] as IBook[];
  Imam: string = 'muslim';
  Hadiths: IHadeth[] = [] as IHadeth[];
  currentHadethNum: number = 0;
  currentHadethText: string = '';

  constructor(
    private _iBookSer: IBookService,
    private _iHadethSer: IHadethService
  ) {}
  ngOnInit(): void {
    this.getNames();
    this.getHadeth();
  }

  getNames() {
    this._iBookSer
      .getNames()
      .pipe(map((res) => res.data.map((item: any) => item.id)))
      .subscribe({
        next: (res) => {
          this.Names = res;
        },
      });
  }
  getHadeth() {
    this._iHadethSer
      .getAll(this.Imam)
      .pipe(map((res) => res.data))
      .pipe(map((res) => res.hadiths.map((hadith: any) => hadith.arab)))
      .subscribe({
        next: (res) => {
          this.Hadiths = res;
          this.currentHadethText = this.Hadiths[0].toString();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  nextHadith() {
    this.currentHadethNum++;
    this.currentHadethText = this.Hadiths[this.currentHadethNum].toString();
  }

  prevHadith() {
    if (this.currentHadethNum != 0) {
      this.currentHadethNum--;
      this.currentHadethText = this.Hadiths[this.currentHadethNum].toString();
    }
  }

  selectChange() {
    this.currentHadethNum = 0;
    this.getHadeth();
  }
}
