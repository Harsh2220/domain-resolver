import { Request, Response } from "express";

async function getSolAddressFromDomain(req: Request, res: Response) {
    const handle = req.params.id;

    try {

        const body = {
            jsonrpc: "2.0",
            id: 1,
            method: "sns_getDomainKey",
            params: [handle],
        };

        const bodyContent = JSON.stringify(body);

        const response = await fetch(`${process.env.QUICKNODE_AUTH}`, {
            method: "POST",
            body: bodyContent
        });
        const data = await response.json();
        if (data) {
            const address = {
                "address": data.result
            }
            res.status(200).json(address);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getSolDomainFromAddress(req: Request, res: Response) {
    const address = req.params.id;

    try {

        const body = {
            jsonrpc: "2.0",
            id: 1,
            method: "sns_getAllDomainsForOwner",
            params: [address],
        };

        const bodyContent = JSON.stringify(body);

        const response = await fetch(`${process.env.QUICKNODE_AUTH}`, {
            method: "POST",
            body: bodyContent
        });
        const data = await response.json();
        if (data) {
            const domains = {
                "domains": data.result
            }
            return res.status(200).json(domains);
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getSolFavouriteDomain(req: Request, res: Response) {
    const address = req.params.id;

    try {

        const body = {
            jsonrpc: "2.0",
            id: 1,
            method: "sns_getFavouriteDomain",
            params: [address],
        };

        const bodyContent = JSON.stringify(body);

        const response = await fetch(`${process.env.QUICKNODE_AUTH}`, {
            method: "POST",
            body: bodyContent
        });
        const data = await response.json();
        if (data.result) {
            return res.status(200).json(data.result);
        }
        return res.status(200).json({ message: data.error.message });
    } catch (error) {
        res.status(500).json(error);
    }
}

export { getSolAddressFromDomain, getSolDomainFromAddress, getSolFavouriteDomain }
