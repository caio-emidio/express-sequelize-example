import { CompanyService } from "../services/Company/company.service";
export class CompanyWrapper {
  public static getCompany(req: any, res: any) {
    res.send(CompanyService.getCompany(req.params.id));
  }

  public static getCompanies(req: any, res: any) {
    res.send(CompanyService.getCompanies());
  }

  public static saveCompany(req: any, res: any) {
    res.send(CompanyService.saveCompany(req.body));
  }

  public static updateCompany(req: any, res: any) {
    res.send(CompanyService.updateCompany(req.params.id, req.body));
  }

  public static deleteCompany(req: any, res: any) {
    res.send(CompanyService.deleteCompany(req.params.id));
  }

}
