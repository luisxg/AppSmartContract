import {Component, OnInit} from '@angular/core';
import { AccountState } from 'src/interfaces/AccountState';
import { WalletService } from 'src/services/WalletService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  depositAmount: number;
  accountState?: AccountState;
  balance?: number;
  loadedBalance = false;

  constructor(private walltetService: WalletService) {
    this.depositAmount = 0.01;
  }

  ngOnInit(): void {
        this.loadedBalance = false;
        this.walltetService.init()
          .then((accState) => {
            this.accountState = accState;
            this.updateBalance().then(() => this.loadedBalance = true);
          })
          .catch((error) => {
            console.error(error);
          });
    }

  depositar(): void {
    this.accountState?.dBank.deposit((this.depositAmount))
      .then();
  }

  retirar(): void {
    this.accountState?.dBank.withdraw()
      .then();
  }

  updateBalance(): Promise<any> {
    return this.accountState?.balance().then((balance) => {
      this.balance = balance;
    }) || Promise.resolve();
  }
}
