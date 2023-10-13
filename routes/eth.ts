import express from "express";
import ethController from "../controllers/eth.controller";
import verifyDomain from "../middleware/verifyDomain";

const router = express.Router();

router.get("/:id", verifyDomain, ethController);

export default router;