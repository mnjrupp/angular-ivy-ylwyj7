import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { CostOfFundsRequest } from '../costoffunds-request-model';
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

  constructor(private formbuilder:FormBuilder) { 
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

  }

  getCOF() {
    // TODO: implemet the CostOfFunds from FCBT
    var copyformValue:PricingModel;
    copyformValue =this.formValue.value;
    console.log(copyformValue);
    console.log(this.unformatNumber(copyformValue.IntRate1));
    //console.log(this.costoffundsreqObj[2].amortizationTermMonths);
    console.log(this.buildCOF(copyformValue))
    
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
      IntRate1: this.formatPercent(0.0256),
      PayAmnt1: this.formatCurrency(1000),
      AmorType2:'P&I',
      AmorTerm2: 20,
      loanProd2: 20,
      TransferOption2: 'Open Prepayment',
      IntRate2: this.formatPercent(0.0256),
      PayAmnt2: this.formatCurrency(1000),
      AmorType3: 'P+I',
      AmorTerm3: 20,
      loanProd3: 20,
      TransferOption3: 'Open Prepayment',
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
    //this.costoffundsreqObj.AmortizationTermMonths=value.AmorTerm1
    this.costoffundsreqObj[0].amortizationType=value.AmorType1
    this.costoffundsreqObj[0].amortizationTypeId=0
    this.costoffundsreqObj[0].correlationId=''
    this.costoffundsreqObj[0].interestOnlyPayments=0
    this.costoffundsreqObj[0].loanAmount=this.unformatNumber(value.loanAmnt)
    this.costoffundsreqObj[0].loanNumber=''
    this.costoffundsreqObj[0].loanTermMonths=+value.loanProd1
    this.costoffundsreqObj[0].lockCategory='30DL'
    this.costoffundsreqObj[0].lockCategoryId=0
    this.costoffundsreqObj[0].optionCategory=value.TransferOption1
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
