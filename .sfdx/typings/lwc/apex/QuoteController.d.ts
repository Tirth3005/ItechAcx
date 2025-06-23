declare module "@salesforce/apex/QuoteController.getProject" {
  export default function getProject(param: {oppId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.getUnit" {
  export default function getUnit(param: {projectId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.getBuildingDetails" {
  export default function getBuildingDetails(param: {projectId: any, building: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.getUnitDetails" {
  export default function getUnitDetails(param: {unitId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.getProjectDetails" {
  export default function getProjectDetails(param: {projectId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.getQuoteDetails" {
  export default function getQuoteDetails(param: {quoteId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.createQuoteRecord" {
  export default function createQuoteRecord(param: {quoteData: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.searchQuotes" {
  export default function searchQuotes(param: {searchKey: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.updateQuote" {
  export default function updateQuote(param: {quoteId: any, quoteTotalRate: any, paymentPlan: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.getMaxAllowedMonths" {
  export default function getMaxAllowedMonths(param: {projectId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.createPaymentMatrix" {
  export default function createPaymentMatrix(param: {payments: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteController.getPaymentToken" {
  export default function getPaymentToken(param: {projectId: any}): Promise<any>;
}
