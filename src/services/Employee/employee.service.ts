import { DatabaseService } from "../../database/database.service";
import { Employee } from "./employee.interfaces"

export class EmployeeService {
    public static getEmployee(id: number) {
        const models = DatabaseService.sequelize.models.employee;

        return models.findOne({ where: { id } });
    }

    public static getEmployeeByCompany(company: number) {
        const models = DatabaseService.sequelize.models.employee;
        return models.findAll({ where: { company } });
    }

    public static saveEmployee(employee: Employee) {
        const models = DatabaseService.sequelize.models.employee;
        return models.create(employee);
    }

    public static updateEmployee(id: number, employee: Employee) {
        const models = DatabaseService.sequelize.models.employee;
        return models.update(employee, { where: { id } });
    }

    public static deleteEmployee(id: number) {
        const models = DatabaseService.sequelize.models.employee;
        return models.destroy({ where: { id } });
    }
}