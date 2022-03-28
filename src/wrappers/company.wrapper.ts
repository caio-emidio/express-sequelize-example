import { CompanyService } from "../services/Company/company.service";
const express = require('express');

export class CompanyWrapper {
  public static getCompany(req: express.Request, res: express.Response) {
    res.send(CompanyService.getCompany(req.params.id));
  }

  public static getCompanies(req: express.Request, res: express.Response) {
    res.send(CompanyService.getCompanies());
  }

  public static saveCompany(req: express.Request, res: express.Response) {
    res.send(CompanyService.saveCompany(req.body));
  }

  public static updateCompany(req: express.Request, res: express.Response) {
    res.send(CompanyService.updateCompany(req.params.id, req.body));
  }

  public static deleteCompany(req: express.Request, res: express.Response) {
    res.send(CompanyService.deleteCompany(req.params.id));
  }

}
