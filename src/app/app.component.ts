import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmptyError } from 'rxjs';
import { BankData } from './models/bank.model';
import { BankApiService } from './services/bank-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private bankApiService: BankApiService) {

  }

  // variables
  id: number = 1;

  readonly bank1: BankData = { id: 1, ip_address: "10.12.1.1", account_number: "da92e7eh", port: 80, node_identifier: "31idwoijd", version: "v1.0", protocol: "http", transaction_fee: 32, trust: 1 }
  readonly bank2: BankData = { id: 2, ip_address: "26.21.23.2", account_number: "f00fed98", port: 80, node_identifier: "9jd83g4n", version: "v1.6", protocol: "http", transaction_fee: 10, trust: 12 }
  readonly bank3: BankData = { id: 3, ip_address: "39.30.31.3", account_number: "dwd912df", port: 80, node_identifier: "0vue0lxn", version: "v3.1", protocol: "http", transaction_fee: 14, trust: 5 }
  
  bankData: BankData = this.bank3;
  bankList: BankData[] = [this.bank1, this.bank2, this.bank3];

  // initialize and fetch banks from API
  ngOnInit(): void {
    this.getBankData(this.id);
    this.getBanks();
  }

  // method for search formular
  onSubmit() {
    this.getBankData(this.id);
  }

  // method for inspect button in the list
  inspect(id: number) {
    this.getBankData(id);
  }

  // get bank with ID from the API
  private getBankData(id: number) {
    this.bankApiService.getBankData(id)
    .subscribe((response) => {
        this.bankData = response;
        console.log(response);
      }, (err) => {
        //alert(`No bank exists with ID ${id}`);
      }
    )
  }

  // get all banks from the API
  private getBanks() {
    this.bankApiService.getBanks().subscribe((response) => {
      this.bankList = response;
      console.log(response)
    }, (err) => {
      //alert("Error fetching banks.");
    })
  }
}
