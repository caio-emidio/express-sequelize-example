import { EmployeeService } from "services/Employee/employee.service";

const express = require('express');

export class EmployeeWrapper {
  public static getEmployee(req: any, res: any) {
    res.send(EmployeeService.getEmployee(req.params.id));
  }

  public static getEmployeeByCompany(req: any, res: any) {
    res.send(EmployeeService.getEmployee(req.params.companyId));
  }

  public static saveEmployee(req: any, res: any) {
    res.send(EmployeeService.saveEmployee(req.body));
  }

  public static updateEmployee(req: any, res: any) {
    res.send(EmployeeService.updateEmployee(req.params.id, req.body));
  }

  public static deleteEmployee(req: any, res: any) {
    res.send(EmployeeService.deleteEmployee(req.params.id));
  }

}
