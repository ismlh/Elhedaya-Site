import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsuarhService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this._httpClient.get(`https://quranapi.pages.dev/api/surah.json`);
  }
}
