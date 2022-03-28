import { DatabaseService } from "../../database/database.service";
import { Company } from "./company.interfaces";

export class CompanyService {
  public static getCompany(id: number) {
    const models = DatabaseService.sequelize.models.company;
    return models.findOne({ where: { id } });
  }

  public static async getCompanies() {
    const models = DatabaseService.sequelize.models.company;
    return models.findAll();
  }

  public static saveCompany(Company: Company) {
    const models = DatabaseService.sequelize.models.company;
    return models.create(Company);
  }

  public static updateCompany(id: number, Company: Company) {
    const models = DatabaseService.sequelize.models.company;
    return models.update(Company, { where: { id } });
  }

  public static deleteCompany(id: number) {
    const models = DatabaseService.sequelize.models.company;
    return models.destroy({ where: { id } });
  }
}
