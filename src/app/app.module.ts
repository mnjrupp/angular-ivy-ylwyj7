import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponent } from './home/home.component';
import { LoanOfficerComponent } from './loanofficer/loanofficer.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports:      [ BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
     FormsModule,
     HttpClientModule,
     ReactiveFormsModule,
     RouterModule.forRoot([
       { path: '', component: LoanOfficerComponent, pathMatch: 'full' },
       //{ path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent },
       { path: 'loanofficer', component: LoanOfficerComponent },
       {path: 'customer',component:CustomerComponent},
     ]) ],

  declarations: [ 
    AppComponent ,
    NavMenuComponent,
    LoanOfficerComponent,
    CustomerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
