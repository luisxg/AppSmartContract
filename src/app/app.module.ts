import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {WalletService} from '../services/WalletService';
import {Metamask} from '../services/Metamask.service';
import { PagoEthereumComponent } from './pago-ethereum/pago-ethereum.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'pagarcuenta', component: PagoEthereumComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PagoEthereumComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    {provide: WalletService, useClass: Metamask}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
