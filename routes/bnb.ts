import express from "express";
import { getBnbAddressFromDomain, getBnbDomainFromAddress } from "../controllers/bnb.controller";
import verifyDomain from "../middleware/verifyDomain";

const router = express.Router();

router.get("/address/:id", getBnbDomainFromAddress);
router.get("/:id", verifyDomain, getBnbAddressFromDomain);

export default router;