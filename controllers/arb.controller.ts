import { Request, Response } from "express";

async function getArbAddressFromDomain(req: Request, res: Response) {
    const handle = req.params.id;
    try {
        const response = await fetch(`https://api.prd.space.id/v1/getAddress?tld=arb1&domain=${handle}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getArbDomainFromAddress(req: Request, res: Response) {
    const address = req.params.id;
    try {
        const response = await fetch(`https://api.prd.space.id/v1/getName?tld=arb1&address=${address}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

export { getArbAddressFromDomain, getArbDomainFromAddress }