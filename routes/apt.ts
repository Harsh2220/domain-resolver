import express from "express";
import verifyDomain from "../middleware/verifyDomain";
import { getAptAddressFromDomain, getAptDomainFromAddress } from "../controllers/apt.controller";

const router = express.Router();

router.get("/address/:id", getAptDomainFromAddress);
router.get("/:id", verifyDomain, getAptAddressFromDomain);

export default router;