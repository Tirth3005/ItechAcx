declare module "@salesforce/apex/SiteVisitController.createSiteVisit" {
  export default function createSiteVisit(param: {visitDateTime: any, siteLocation: any, leadId: any, projectId: any}): Promise<any>;
}
declare module "@salesforce/apex/SiteVisitController.getSiteLocationOptions" {
  export default function getSiteLocationOptions(param: {leadId: any}): Promise<any>;
}
declare module "@salesforce/apex/SiteVisitController.createLead" {
  export default function createLead(param: {firstName: any, lastName: any, email: any, mobile: any, company: any, projectId: any}): Promise<any>;
}
declare module "@salesforce/apex/SiteVisitController.getLeadDetailss" {
  export default function getLeadDetailss(param: {leadId: any}): Promise<any>;
}
declare module "@salesforce/apex/SiteVisitController.getLeadDetails" {
  export default function getLeadDetails(param: {leadId: any}): Promise<any>;
}
declare module "@salesforce/apex/SiteVisitController.getSiteLocationOption" {
  export default function getSiteLocationOption(param: {leadId: any}): Promise<any>;
}
declare module "@salesforce/apex/SiteVisitController.getSiteVisitDetails" {
  export default function getSiteVisitDetails(param: {siteVisitId: any}): Promise<any>;
}
