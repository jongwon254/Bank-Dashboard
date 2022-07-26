import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankData } from '../models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankApiService {

  constructor(private http: HttpClient) { }

  getBankData(id: number): Observable<BankData> {
    return this.http.get<BankData>(environment.baseUrl + "/" + id)
  }
}
