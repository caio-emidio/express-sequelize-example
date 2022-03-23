import { Router } from "express";
import { AuthWrapper } from "../wrappers/auth.wrapper";

const router = Router();

router.post("/login", AuthWrapper.signIn);

export default router;
