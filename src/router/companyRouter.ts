import { CompanyWrapper } from "../wrappers/companyWrapper";
import { Router } from "express";
import { auth } from "../middleware/authentication";

const router = Router();

router.get("/:id", auth, CompanyWrapper.getCompany);
router.post("/", auth, CompanyWrapper.saveCompany);
router.put("/:id", auth, CompanyWrapper.updateCompany);
router.delete("/:id", auth, CompanyWrapper.deleteCompany);

export default router;
