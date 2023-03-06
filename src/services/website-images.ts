import * as cheerio from "cheerio";
import type { WebsiteImages } from "src/utils/types";
import { getImageSize } from "src/utils/image";
import { optimizeImage } from "./image-optimizer";

const getWebsiteImages = async (url: string): Promise<WebsiteImages> => {
    const response = await fetch(url);
    const html = await response.text();
    const selector = cheerio.load(html);
    const title = selector("title").text();
    const description = selector("meta[name='description']").attr("content") || "";
    const icon = getFullImageURL(url, 
        selector("link[rel='icon']").attr("href") ||
        selector("link[rel='shortcut icon']").attr("href") ||
        "/favicon.ico"
    );
    const uniqueImageURLs = [...new Set(selector("img").get().map(element => {
        return selector(element).attr("src") || "";
    }))].filter(url => {
        try {
            const urlObject = new URL(url);
            if(urlObject.origin === "null") return false;
        } catch {}
        return url;
    });
    const images = await Promise.all(uniqueImageURLs.map(async imageSrc => {
        const imageURL = getFullImageURL(url, imageSrc);
        const imageName = imageURL.split("/").at(-1) || "";
        const imageSize = await getImageSize(imageURL);
        const optimizedImageURL = await optimizeImage(imageURL);
        const optimizedImageSize = await getImageSize(optimizedImageURL);
        return {
            name: imageName,
            originalURL: imageURL,
            originalSize: imageSize,
            optimizedURL: optimizedImageURL,
            optimizedSize: optimizedImageSize
        }
    }));
    return {
        title,
        description,
        icon,
        images
    }
}

const isURL = (url: string) => {
	try{
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

const getFullImageURL = (websiteURL: string, imageURL: string) => {
    if(!isURL(imageURL)) {
        const websiteURLObject = new URL(websiteURL);
        const path = websiteURLObject.pathname;
        return websiteURLObject.origin + (imageURL[0] === "/" ? 
            imageURL :
            `${path}${path.at(-1) === "/" ? imageURL : "/" + imageURL}`
        );
    }
    return imageURL;
}

export {
    getWebsiteImages
}