import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { CostOfFundsRequest } from '../costoffunds-request-model';
import {LoanOfficer} from '../loanofficer-model';
import  dbOfficers from '../../assets/Officers.json';


@Component({
  selector: 'app-loanofficer',
  templateUrl: './loanofficer.component.html',
  styleUrls: ['./loanofficer.component.css']
})
export class LoanOfficerComponent implements OnInit {
  LoanMoney;
  officers:any;
  formValue : FormGroup;
  costoffundsreqObj: CostOfFundsRequest;

  constructor(private formbuilder:FormBuilder) { 
    this.officers = dbOfficers;

  }

  getCOF() {
    // TODO: implemet the CostOfFunds from FCBT
    console.log(this.formValue.value);
  }
  ngOnInit() {
   this.LoanMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(150000);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var strtoday = mm + '/' + dd + '/' + yyyy;

    this.formValue = this.formbuilder.group({
      applicationName: '',
      phoneNumber: '',
      address: '',
      loanDate:'',
      loanOfficer: '',
      branchOffice: '',
      branchaddress: '',
      calcDate:  strtoday,
      fsaguarantee: '1',
      loantype: '2',
      lienpos: '1',
      loanAmnt: this.LoanMoney,
      paymentfreq: 12,
      pd: '4',
      ballonyrs: '1',
      locateral: '1',
      feeAmnt: 0,
      lgd: '1',
      ballon: null,
      AmorType1: 'P&I',
      AmorTerm1: 20,
      loanProd1: 20,
      TransferOption1: 'Open Prepayment',
      IntRate1: 0.0256,
      PayAmnt1: 1000,
      AmorType2:'P&I',
      AmorTerm2: 20,
      loanProd2: 20,
      TransferOption2: 'Open Prepayment',
      IntRate2: 0.0256,
      PayAmnt2: 1000,
      AmorType3: 'P+I',
      AmorTerm3: 20,
      loanProd3: 20,
      TransferOption3: 'Open Prepayment',
      IntRate3: 0.0256,
      PayAmnt3: 863.74,
      RecomRate1: 0.0464,
      RecomSpread1: 0.0265,
      Variance1: 0,
      finalSpread1: 0.0265,
      RecomRate2: 0.0464,
      RecomSpread2: 0.0265,
      Variance2: 0,
      finalSpread2: 0.0265,
      RecomRate3: 0.0464,
      RecomSpread3: 0.0265,
      Variance3: 0,
      finalSpread3: 0.0265,

    })

  }
  updateOfficerData(value){
    //console.log(event.value);
    var foundOfficer:LoanOfficer = this.officers.filter(x=> x.name===value);
    const attr = "location";
      console.log(foundOfficer[0].location);
      this.formValue.patchValue({branchOffice:foundOfficer[0].location,
        branchaddress:foundOfficer[0].Address});
    }
   

  }
