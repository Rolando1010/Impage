import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import type { WebsiteImages } from "src/utils/types";
import requests from "src/utils/requests";
import { queryStringToString } from "src/utils/text";

const useWebsiteImages = () => {
    const router = useRouter();
    const { url: originalURL } = router.query;
    const url = useMemo(() => queryStringToString(originalURL), [originalURL]);
    const [websiteImages, setWebsiteImages] = useState<WebsiteImages | null>(null);

    useEffect(() => {
        if(url){
            requests
               .get<WebsiteImages>(`/api/website-images?url=${url}`)
                .then(setWebsiteImages);
        }
    }, [url]);

    return {url, websiteImages};
}

export default useWebsiteImages;