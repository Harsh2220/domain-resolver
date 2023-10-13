import { Request, Response } from "express";

async function getBnbAddressFromDomain(req: Request, res: Response) {
    const handle = req.params.id;
    try {
        const response = await fetch(`https://api.prd.space.id/v1/getAddress?tld=bnb&domain=${handle}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getBnbDomainFromAddress(req: Request, res: Response) {
    const address = req.params.id;
    try {
        const response = await fetch(`https://api.prd.space.id/v1/getName?tld=bnb&address=${address}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

export { getBnbAddressFromDomain, getBnbDomainFromAddress }