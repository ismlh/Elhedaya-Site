import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsuarhContentService {
  constructor(private _httpClient: HttpClient) {}

  getSuarh(number: number): Observable<any> {
    return this._httpClient.get(
      `https://quranapi.pages.dev/api/${number}.json`
    );
  }
}
