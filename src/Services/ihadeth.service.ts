import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class IHadethService {
  constructor(private _http: HttpClient) {}

  getAll(Imam: string): Observable<any> {
    return this._http.get<any>(
      `${environment.baseUrl}books/${Imam}?range=1-300`
    );
  }
}
