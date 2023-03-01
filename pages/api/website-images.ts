import { NextApiRequest, NextApiResponse } from "next";
import { getWebsiteImages } from "src/services/website-images";
import { queryStringToString } from "src/utils/text";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const url = queryStringToString(request.query.url);
    return response.status(200).json(await getWebsiteImages(url));
}