import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IprayerContentService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this._httpClient.get(
      'https://api.aladhan.com/v1/timingsByCity/08-01-2025?city=cireo&country=egypt&method=8'
    );
  }
}
