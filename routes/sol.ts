import express from "express";
import verifyDomain from "../middleware/verifyDomain";
import { getSolAddressFromDomain, getSolDomainFromAddress, getSolFavouriteDomain } from "../controllers/sol.controller";

const router = express.Router();

router.get("/favourite/:id", getSolFavouriteDomain);
router.get("/address/:id", getSolDomainFromAddress);
router.get("/:id", verifyDomain, getSolAddressFromDomain);

export default router;