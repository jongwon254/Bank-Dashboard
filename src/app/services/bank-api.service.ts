import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankApiService {

  constructor(private http: HttpClient) { }

  getBankData(id: string) {
    this.http.get(environment.baseUrl, {
      params: new HttpParams()
      .set('', id)
    })
  }
}
