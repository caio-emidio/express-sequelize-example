import { Company } from "./company.interfaces";

const testCompany = {
    id: 1,
    name: "test company",
    email: "testcompany@test.com",
    phone: "1234567689",
    website: "wwww.testcompany.com",
} as Company;

export class CompanyService {
    public static getCompany(id: number) {
        return testCompany;
    }

    public static getCompanies() {
        return [testCompany, testCompany, testCompany];
    }

    public static saveCompany(Company: Company) {
        return Company;
    }

    public static updateCompany(id: number, Company: Company) {
        return Company;
    }

    public static deleteCompany(id: number) {
        return true;
    }
}