import express from "express";
import { getArbAddressFromDomain, getArbDomainFromAddress } from "../controllers/arb.controller";
import verifyDomain from "../middleware/verifyDomain";

const router = express.Router();

router.get("/address/:id", getArbDomainFromAddress);
router.get("/:id", verifyDomain, getArbAddressFromDomain);

export default router;