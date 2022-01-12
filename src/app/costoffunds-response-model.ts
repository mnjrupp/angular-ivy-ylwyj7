export interface CostOfFundsResponse {
  Success: boolean;
  Data: Datum[];
  Error: Error;
}
export interface Error {
  Code: string;
  Target: string;
  Message: string;
  Details: Detail[];
  InnerError: Innererror;
}
export interface Innererror {

}
export interface Detail {

}
export interface Datum {
  Success: boolean;
  Error: string;
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
  CurrentIndex: number;
  MonthlyIndex: number;
  Index: number;
  Spread: number;
  WholesaleRate: number;
  RateCode: string;
  RateSetId: number;
  RateSourceDate: Date;
  RateSourceDateDisplay: string;
  MonthlyRateSourceDate: Date;
  MonthlyRateSourceDateDisplay: string;
  RateValidThroughDate: Date;
  RateValidThroughDateDisplay: string;
  WeightedAverageLife: number;
  LFF: number;
  LockExpirationDate: Date;
  LockExpirationDateDisplay: string;
  RateLockQuoteId: number;
  RateLockQuote: Ratelockquote;
  TimeStamp: Date;
}
export interface Ratelockquote {
  RateLockQuoteId: number;
  RateLockQuoteStatusId: number;
  RateLockQuoteStatusCode: string;
  RateLockQuoteStatusName: string;
  LoanAmount: number;
  AmortizationTypeId: number;
  AmortizationTypeCode: string;
  AmortizationTypeName: string;
  AmortizationTermMonths: number;
  LoanTermMonths: number;
  PaymentsPerYear: number;
  InterestOnlyPayments: number;
  RateProductId: number;
  RateProductName: string;
  RateSetId: number;
  QuoteExpirationDate: Date;
  QuoteExpirationDateDisplay: string;
  OptionTypeId: number;
  OptionTypeCode: string;
  OptionTypeName: string;
  LockTypeId: number;
  LockTypeCode: string;
  LockTypeName: string;
  BorrowerName: string;
  LFF: number;
  LoanApplicationNumber: string;
  AffiliateNumber: string;
  AssociationSpread: number;
  WholesaleRate: number;
  BorrowerRate: number;
  LockExpirationDate: Date;
  LockExpirationDateDisplay: string;
  Comments: string;
  CreatedEmail: string;
  IsApproved: boolean;
  IsDeclined: boolean;
  IsPending: boolean;
  IsWithdrawn: boolean;
  IsExpired: boolean;
  IsLargeLoan: boolean;
  IsSpotRate: boolean;
  IsPreApproved: boolean;
  CreatedOn: Date;
  CreatedBy: string;
  ModifiedOn: Date;
  ModifiedBy: string;
}
