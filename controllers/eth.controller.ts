import { Request, Response } from "express";

const ENS_QUERY = `query dommainData($name:String){
  domains(where: {name:$name}) {
    id
    name
    labelName
    labelhash
    subdomainCount
    resolvedAddress{
      id
    }
    subdomains{
      id
      name
      labelName
      labelhash
      resolvedAddress{
        id
        registrations{
          registrationDate
        }
      }
      subdomainCount
    }
  }
}`;

export default async function ethController(req: Request, res: Response) {
  const handle = req.params.id;
  try {

    const gqlBody = {
      query: ENS_QUERY,
      variables: { name: handle },
    };

    const bodyContent = JSON.stringify(gqlBody);

    const response = await fetch("https://api.thegraph.com/subgraphs/name/ensdomains/ens", {
      method: "POST",
      body: bodyContent,
    });

    const data = await response.json();
    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json(error);
  }
}
