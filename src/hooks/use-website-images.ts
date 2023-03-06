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
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if(url){
            setIsLoading(true);
            requests
                .get<WebsiteImages>(`/api/website-images?url=${url}`)
                .then(setWebsiteImages)
                .catch(() => setIsError(true))
                .finally(() => setIsLoading(false));
        }
    }, [url]);

    return { url, websiteImages, isLoading, isError };
}

export default useWebsiteImages;