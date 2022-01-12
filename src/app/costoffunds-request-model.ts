export interface CostOfFundsRequest {
  CorrelationId: string;
  LoanNumber: string;
  LoanAmount: number;
  AmortizationType: string;
  AmortizationTypeId: number;
  AmortizationTermMonths: number;
  LoanTermMonths: number;
  PaymentsPerYear: number;
  InterestOnlyPayments: number;
  RateProduct: string;
  OptionCategory: string;
  OptionCategoryId: number;
  LockCategory: string;
  LockCategoryId: number;
  RoundingRule: Roundingrule;
}
export interface Roundingrule {
  Type: string;
  Precision: number;
  BasisPoint: number;
}