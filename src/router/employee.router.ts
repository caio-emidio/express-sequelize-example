import { Router } from "express";
import { auth } from "../middleware/authentication";
import { EmployeeWrapper } from "../wrappers/employee.wrapper";

const router = Router();

router.get("/:id", auth, EmployeeWrapper.getEmployee);
router.get("/:companyId", auth, EmployeeWrapper.getEmployeeByCompany);
router.post("/", auth, EmployeeWrapper.saveEmployee);
router.put("/:id", auth, EmployeeWrapper.updateEmployee);
router.delete("/:id", auth, EmployeeWrapper.deleteEmployee);

export default router;
