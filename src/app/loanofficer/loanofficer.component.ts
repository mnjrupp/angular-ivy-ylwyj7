import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { CostOfFundsRequest } from '../costoffunds-request-model';
import {CostOfFundsResponse} from '../costoffunds-response-model';

import {LoanOfficer} from '../loanofficer-model';
import  dbOfficers from '../../assets/Officers.json';
import {PricingModel} from '../pricing-model';


@Component({
  selector: 'app-loanofficer',
  templateUrl: './loanofficer.component.html',
  styleUrls: ['./loanofficer.component.css']
})
export class LoanOfficerComponent implements OnInit {
  LoanMoney;
  officers:any;
  formValue : FormGroup;
  costoffundsreqObj: CostOfFundsRequest[];
  costoffundsresObj:CostOfFundsResponse;

  constructor(private formbuilder:FormBuilder,private apiservice:ApiService) { 
    this.officers = dbOfficers;
    this.costoffundsreqObj =[{
      correlationId:'' ,
      loanNumber: "",
      loanAmount: 145000,
      amortizationType: "P+I",
      amortizationTypeId: 0,
      amortizationTermMonths: 28,
      loanTermMonths: 28,
      paymentsPerYear: 12,
      interestOnlyPayments: 0,
      rateProduct: "Fixed",
      optionCategory: "FYM",
      optionCategoryId: 0,
      lockCategory: "30DL",
      lockCategoryId: 0,
      RoundingRule: {
        Type: "Actual",
        Precision: 0,
        BasisPoint: 0
      }
    },
    {
      correlationId:'' ,
      loanNumber: "",
      loanAmount: 145000,
      amortizationType: "P+I",
      amortizationTypeId: 0,
      amortizationTermMonths: 28,
      loanTermMonths: 28,
      paymentsPerYear: 12,
      interestOnlyPayments: 0,
      rateProduct: "Fixed",
      optionCategory: "FYM",
      optionCategoryId: 0,
      lockCategory: "30DL",
      lockCategoryId: 0,
      RoundingRule: {
        Type: "Actual",
        Precision: 0,
        BasisPoint: 0
      }
    },
    {
      correlationId:'' ,
      loanNumber: "",
      loanAmount: 145000,
      amortizationType: "P+I",
      amortizationTypeId: 0,
      amortizationTermMonths: 28,
      loanTermMonths: 28,
      paymentsPerYear: 12,
      interestOnlyPayments: 0,
      rateProduct: "Fixed",
      optionCategory: "FYM",
      optionCategoryId: 0,
      lockCategory: "30DL",
      lockCategoryId: 0,
      RoundingRule: {
        Type: "Actual",
        Precision: 0,
        BasisPoint: 0
      }
    }]
    this.costoffundsresObj = {
      "Success": true,
      "Data": [
        {
          "Success": true,
          "Error": null,
          "CorrelationId": "",
          "LoanNumber": "",
          "LoanAmount": 145000,
          "AmortizationType": "P&I",
          "AmortizationTypeId": 1,
          "AmortizationTermMonths": 28,
          "LoanTermMonths": 28,
          "PaymentsPerYear": 12,
          "InterestOnlyPayments": 0,
          "RateProduct": "Fixed",
          "OptionCategory": "FYM",
          "OptionCategoryId": 12,
          "LockCategory": "30DL",
          "LockCategoryId": 3,
          "CurrentIndex": 0,
          "SpreadIndex": 0,
          "MonthlyIndex": 0,
          "Index": 0,
          "Spread": 0.02786894650113,
          "WholesaleRate": 0.02786894650113,
          "RateCode": "FIXTM",
          "RateSetId": 737,
          "RateSourceDate": "2022-03-30T00:00:00-05:00",
          "RateSourceDateDisplay": "Wednesday, March 30, 2022",
          "MonthlyRateSourceDate": "0001-01-01T00:00:00",
          "MonthlyRateSourceDateDisplay": "Monday, January 1, 0001",
          "RateValidThroughDate": "2022-03-31T16:15:00-05:00",
          "RateValidThroughDateDisplay": "Thursday, March 31, 2022 4:15 PM",
          "WeightedAverageLife": 14,
          "LFF": 0.9657,
          "LockExpirationDate": "2022-05-02T17:00:00-05:00",
          "LockExpirationDateDisplay": "Monday, May 2, 2022 5:00 PM",
          "RateLockQuoteId": 0,
          "RateLockQuote": null,
          "TimeStamp": "2022-03-31T09:02:06.7460034-05:00"
        },
        {
          "Success": true,
          "Error": null,
          "CorrelationId": "",
          "LoanNumber": "",
          "LoanAmount": 145000,
          "AmortizationType": "P+I",
          "AmortizationTypeId": 2,
          "AmortizationTermMonths": 28,
          "LoanTermMonths": 28,
          "PaymentsPerYear": 12,
          "InterestOnlyPayments": 0,
          "RateProduct": "Fixed",
          "OptionCategory": "OPO",
          "OptionCategoryId": 6,
          "LockCategory": "30DL",
          "LockCategoryId": 3,
          "CurrentIndex": 0,
          "SpreadIndex": 0,
          "MonthlyIndex": 0,
          "Index": 0,
          "Spread": 0.02939791034013,
          "WholesaleRate": 0.02939791034013,
          "RateCode": "FIXTM",
          "RateSetId": 737,
          "RateSourceDate": "2022-03-30T00:00:00-05:00",
          "RateSourceDateDisplay": "Wednesday, March 30, 2022",
          "MonthlyRateSourceDate": "0001-01-01T00:00:00",
          "MonthlyRateSourceDateDisplay": "Monday, January 1, 0001",
          "RateValidThroughDate": "2022-03-31T16:15:00-05:00",
          "RateValidThroughDateDisplay": "Thursday, March 31, 2022 4:15 PM",
          "WeightedAverageLife": 14,
          "LFF": 0.9657,
          "LockExpirationDate": "2022-05-02T17:00:00-05:00",
          "LockExpirationDateDisplay": "Monday, May 2, 2022 5:00 PM",
          "RateLockQuoteId": 0,
          "RateLockQuote": null,
          "TimeStamp": "2022-03-31T09:02:06.7460034-05:00"
        },
        {
          "Success": true,
          "Error": null,
          "CorrelationId": "",
          "LoanNumber": "",
          "LoanAmount": 145000,
          "AmortizationType": "P+I",
          "AmortizationTypeId": 2,
          "AmortizationTermMonths": 28,
          "LoanTermMonths": 28,
          "PaymentsPerYear": 12,
          "InterestOnlyPayments": 0,
          "RateProduct": "Fixed",
          "OptionCategory": "FYM",
          "OptionCategoryId": 12,
          "LockCategory": "30DL",
          "LockCategoryId": 3,
          "CurrentIndex": 0,
          "SpreadIndex": 0,
          "MonthlyIndex": 0,
          "Index": 0,
          "Spread": 0.02786894650113,
          "WholesaleRate": 0.02786894650113,
          "RateCode": "FIXTM",
          "RateSetId": 737,
          "RateSourceDate": "2022-03-30T00:00:00-05:00",
          "RateSourceDateDisplay": "Wednesday, March 30, 2022",
          "MonthlyRateSourceDate": "0001-01-01T00:00:00",
          "MonthlyRateSourceDateDisplay": "Monday, January 1, 0001",
          "RateValidThroughDate": "2022-03-31T16:15:00-05:00",
          "RateValidThroughDateDisplay": "Thursday, March 31, 2022 4:15 PM",
          "WeightedAverageLife": 14,
          "LFF": 0.9657,
          "LockExpirationDate": "2022-05-02T17:00:00-05:00",
          "LockExpirationDateDisplay": "Monday, May 2, 2022 5:00 PM",
          "RateLockQuoteId": 0,
          "RateLockQuote": null,
          "TimeStamp": "2022-03-31T09:02:06.7460034-05:00"
        }
      ],
      "Error": null
    }

  }

  getCOF() {
    // TODO: implemet the CostOfFunds from FCBT
    var copyformValue:PricingModel;
    copyformValue =this.formValue.value;
    console.log(copyformValue);
    console.log(this.unformatNumber(copyformValue.IntRate1));
    //console.log(this.costoffundsreqObj[2].amortizationTermMonths);
    console.log(this.buildCOF(copyformValue))
    this.apiservice.postCostofFunds(this.buildCOF(copyformValue)).subscribe(
      (data)=>{
        console.log('data returned ',data)
      },
      (error)=>{
          console.log('error returned =>',error);
      }
    )
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
      TransferOption1: 'OPO',
      IntRate1: this.formatPercent(0.0256),
      PayAmnt1: this.formatCurrency(1000),
      AmorType2:'P&I',
      AmorTerm2: 20,
      loanProd2: 20,
      TransferOption2: 'OPO',
      IntRate2: this.formatPercent(0.0256),
      PayAmnt2: this.formatCurrency(1000),
      AmorType3: 'P+I',
      AmorTerm3: 20,
      loanProd3: 20,
      TransferOption3: 'OPO',
      IntRate3: this.formatPercent(0.0256),
      PayAmnt3: this.formatCurrency(863.74),
      RecomRate1: this.formatPercent(0.0464),
      RecomSpread1: this.formatPercent(0.0265),
      Variance1: 0,
      finalSpread1: this.formatPercent(0.0265),
      RecomRate2: this.formatPercent(0.0464),
      RecomSpread2: this.formatPercent(0.0265),
      Variance2: 0,
      finalSpread2: this.formatPercent(0.0265),
      RecomRate3: this.formatPercent(0.0464),
      RecomSpread3: this.formatPercent(0.0265),
      Variance3: 0,
      finalSpread3: this.formatPercent(0.0265),

    })

  }
  buildCOF(value:PricingModel){
    this.costoffundsreqObj[0].amortizationTermMonths=value.AmorTerm1
    this.costoffundsreqObj[0].amortizationType=value.AmorType1
    this.costoffundsreqObj[0].amortizationTypeId=0
    this.costoffundsreqObj[0].correlationId=''
    this.costoffundsreqObj[0].interestOnlyPayments=0
    this.costoffundsreqObj[0].loanAmount=+this.unformatNumber(value.loanAmnt)
    this.costoffundsreqObj[0].loanNumber=''
    this.costoffundsreqObj[0].loanTermMonths=+value.loanProd1
    this.costoffundsreqObj[0].lockCategory='30DL'
    this.costoffundsreqObj[0].lockCategoryId=0
    this.costoffundsreqObj[0].optionCategory=value.TransferOption1
    this.costoffundsreqObj[0].optionCategoryId=0
    this.costoffundsreqObj[0].paymentsPerYear=value.paymentfreq
    this.costoffundsreqObj[0].rateProduct='Fixed'
    this.costoffundsreqObj[1].amortizationTermMonths=value.AmorTerm2
    this.costoffundsreqObj[1].amortizationType=value.AmorType2
    this.costoffundsreqObj[1].amortizationTypeId=0
    this.costoffundsreqObj[1].correlationId=''
    this.costoffundsreqObj[1].interestOnlyPayments=0
    this.costoffundsreqObj[1].loanAmount=+this.unformatNumber(value.loanAmnt)
    this.costoffundsreqObj[1].loanNumber=''
    this.costoffundsreqObj[1].loanTermMonths=+value.loanProd2
    this.costoffundsreqObj[1].lockCategory='30DL'
    this.costoffundsreqObj[1].lockCategoryId=0
    this.costoffundsreqObj[1].optionCategory=value.TransferOption2
    this.costoffundsreqObj[1].optionCategoryId=0
    this.costoffundsreqObj[1].paymentsPerYear=value.paymentfreq
    this.costoffundsreqObj[1].rateProduct='Fixed'
    this.costoffundsreqObj[2].amortizationTermMonths=value.AmorTerm3
    this.costoffundsreqObj[2].amortizationType=value.AmorType3
    this.costoffundsreqObj[2].amortizationTypeId=0
    this.costoffundsreqObj[2].correlationId=''
    this.costoffundsreqObj[2].interestOnlyPayments=0
    this.costoffundsreqObj[2].loanAmount=+this.unformatNumber(value.loanAmnt)
    this.costoffundsreqObj[2].loanNumber=''
    this.costoffundsreqObj[2].loanTermMonths=+value.loanProd3
    this.costoffundsreqObj[2].lockCategory='30DL'
    this.costoffundsreqObj[2].lockCategoryId=0
    this.costoffundsreqObj[2].optionCategory=value.TransferOption3
    this.costoffundsreqObj[2].optionCategoryId=0
    this.costoffundsreqObj[2].paymentsPerYear=value.paymentfreq
    this.costoffundsreqObj[2].rateProduct='Fixed'
   return this.costoffundsreqObj;

  }
  updateOfficerData(value){
    //console.log(event.value);
    var foundOfficer:LoanOfficer = this.officers.filter(x=> x.name===value);
    const attr = "location";
      console.log(foundOfficer[0].location);
      this.formValue.patchValue({branchOffice:foundOfficer[0].location,
        branchaddress:foundOfficer[0].Address});
    }
    formatCurrency_LoanAmnt(event)
    {
      var uy = new Intl.NumberFormat('en-US',{style: 'currency', currency:'USD'}).format(event.target.value);
      this.formValue.patchValue({loanAmnt:uy});
     
    }
    formatCurrency_FeeAmnt(event)
    {
      var uy = new Intl.NumberFormat('en-US',{style: 'currency', currency:'USD'}).format(event.target.value);
      this.formValue.patchValue({feeAmnt:uy});
     
    }
    formatCurrency(value){
      var uy = new Intl.NumberFormat('en-US',{style: 'currency', currency:'USD'}).format(value);
      return uy;
    }

    formatPercent(value){
      var uy = new Intl.NumberFormat('en-US',{style: 'percent', maximumFractionDigits: 2}).format(value);
      return uy;
    }
    formatPercent_var1(event){
      this.formValue.patchValue({Variance1:this.formatPercent(event.target.value)});
    }
    unformatNumber(value){
      //console.log(value.replace(/\$|,/g, ''));
      return value.replace(/\$|,|\%/g, '');
    }
  }
