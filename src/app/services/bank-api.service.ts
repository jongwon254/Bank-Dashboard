import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankData } from '../models/bank.model';

@Injectable({
  providedIn: 'root'
})
export class BankApiService {

  private _list: BankData[] = [];

  constructor(private http: HttpClient) { }

  // get bank with ID from API
  getBankData(id: number): Observable<BankData> {
    return this.http.get<BankData>(environment.baseUrl + "/" + id)
  }

  // get all banks from API
  getBanks(): Observable<BankData[]> {
    return this.http.get<BankData[]>(environment.baseUrl)
  }
}
