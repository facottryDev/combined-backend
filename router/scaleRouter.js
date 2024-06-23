import { Router } from "express";
import { getMapping } from "../controllers/scale";
const router = Router();

router.post("/get-mappings", getMapping);

export default router;