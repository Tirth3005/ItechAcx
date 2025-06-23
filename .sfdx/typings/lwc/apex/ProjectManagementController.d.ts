declare module "@salesforce/apex/ProjectManagementController.projectList" {
  export default function projectList(): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.getEmployeeList" {
  export default function getEmployeeList(): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.getInActiveEmployeeList" {
  export default function getInActiveEmployeeList(): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.toggleEmployeeActiveStatus" {
  export default function toggleEmployeeActiveStatus(param: {employeeId: any, isActive: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.updateProject" {
  export default function updateProject(param: {project: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.assigneEmployeeProject" {
  export default function assigneEmployeeProject(param: {projectId: any, employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.createNewProject" {
  export default function createNewProject(param: {projectData: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.getEmployeeData" {
  export default function getEmployeeData(): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.assignEmployeeList" {
  export default function assignEmployeeList(param: {projectId: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.deActivateAssignEMployeeProject" {
  export default function deActivateAssignEMployeeProject(param: {records: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.getPickListValues" {
  export default function getPickListValues(param: {objectApiName: any, fieldApiName: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.createEmployee" {
  export default function createEmployee(param: {employeeData: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.searchProjectList" {
  export default function searchProjectList(param: {searchTerm: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.getEmployeeDetails" {
  export default function getEmployeeDetails(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.saveEmployeeDetails" {
  export default function saveEmployeeDetails(param: {employee: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.employeeProjectTask" {
  export default function employeeProjectTask(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.allEmployeeProjectTask" {
  export default function allEmployeeProjectTask(param: {taskAssignDate: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.getProjectTask" {
  export default function getProjectTask(param: {projectTaskId: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.updateProjectTask" {
  export default function updateProjectTask(param: {projectTaskId: any, projectId: any, employeeId: any, taskAssignDate: any, tasks: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.deleteProjectTask" {
  export default function deleteProjectTask(param: {projectTaskId: any}): Promise<any>;
}
declare module "@salesforce/apex/ProjectManagementController.createTask" {
  export default function createTask(param: {projectId: any, employeeId: any, taskAssignDate: any, tasks: any}): Promise<any>;
}
