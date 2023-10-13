import { Request, Response } from "express";

async function getAptAddressFromDomain(req: Request, res: Response) {
    const handle = req.params.id.split('.')[0];
    try {
        const response = await fetch(`https://www.aptosnames.com/api/mainnet/v1/address/${handle}`);
        const data = await response.json();
        if (Object.keys(data).length === 0) {
            return res.status(200).json({ address: null });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getAptDomainFromAddress(req: Request, res: Response) {
    const address = req.params.id;
    try {
        const response = await fetch(`https://www.aptosnames.com/api/mainnet/v1/name/${address}`);
        const data = await response.json();
        if (Object.keys(data).length === 0) {
            return res.status(200).json({ name: null });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

export { getAptAddressFromDomain, getAptDomainFromAddress };