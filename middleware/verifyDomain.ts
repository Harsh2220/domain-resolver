import { NextFunction, Request, Response } from "express";

export default async function verifyDomain(req: Request, res: Response, next: NextFunction) {
    const handle = req.params.id;
    const originalUrl = req.originalUrl;
    const chain = originalUrl.split("/")[2];
    try {
        if (!handle.includes(`.${chain}`)) {
            return res.status(400).json({ message: "Invalid domain" })
        }
        return next();
    } catch (error) {
        res.status(500).json(error);
    }
}