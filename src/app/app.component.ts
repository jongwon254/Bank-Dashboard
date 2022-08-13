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
  bankData?: BankData;
  bankList?: BankData[];

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
        alert(`No bank exists with ID ${id}`);
      }
    )
  }

  // get all banks from the API
  private getBanks() {
    this.bankApiService.getBanks().subscribe((response) => {
      this.bankList = response;
      console.log(response)
    }, (err) => {
      alert("Error fetching banks.");
    })
  }
}
