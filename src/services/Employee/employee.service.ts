import { Employee } from "./employee.interfaces"

const testEmployee = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@test.com',
    phone: '123456789',
    company: 1
};

export class EmployeeService {
    public static getEmployee(id: number) {
        return testEmployee;
    }

    public static getEmployeeByCompany(company: number) {
        return [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@test.com',
                phone: '123456789',
                company: 1
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'jane.doe@test.com',
                phone: '123456789',
                company: 1
            }
        ]
    }

    public static saveEmployee(employee: Employee) {
        return employee;
    }

    public static updateEmployee(id: number, employee: Employee) {
        return employee;
    }

    public static deleteEmployee(id: number) {
        return true;
    }
}