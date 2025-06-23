declare module "@salesforce/apex/LeadConversionController.getLeadDetailsFromSiteVisit" {
  export default function getLeadDetailsFromSiteVisit(param: {siteVisitId: any}): Promise<any>;
}
declare module "@salesforce/apex/LeadConversionController.findDuplicates" {
  export default function findDuplicates(param: {siteVisitId: any}): Promise<any>;
}
declare module "@salesforce/apex/LeadConversionController.convertLeadFromSiteVisit" {
  export default function convertLeadFromSiteVisit(param: {siteVisitId: any, useExisting: any, accountId: any, contactId: any, createOpportunity: any}): Promise<any>;
}
declare module "@salesforce/apex/LeadConversionController.createNewAccount" {
  export default function createNewAccount(param: {companyName: any}): Promise<any>;
}
declare module "@salesforce/apex/LeadConversionController.createNewContact" {
  export default function createNewContact(param: {firstName: any, lastName: any, email: any}): Promise<any>;
}
