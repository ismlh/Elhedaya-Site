import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/ibook';
import { environment } from '../Environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class IBookService {
  constructor(private _httpClient: HttpClient) {}

  getNames(): Observable<any> {
    return this._httpClient.get<any>(`${environment.baseUrl}books`);
  }
}
