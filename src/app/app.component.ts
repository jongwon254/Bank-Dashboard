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

  id: number = 1;
  bankData?: BankData;
  bankList?: BankData[];

  ngOnInit(): void {
    this.getBankData(this.id);
    this.getBanks();
  }

  onSubmit() {
    this.getBankData(this.id);
  }

  inspect(id: number) {
    this.getBankData(id);
  }

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

  private getBanks() {
    this.bankApiService.getBanks().subscribe((response) => {
      this.bankList = response;
      console.log(response)
    }, (err) => {
      alert("Error fetching banks.");
    })
  }
}
