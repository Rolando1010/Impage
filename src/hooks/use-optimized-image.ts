import { useEffect, useState } from "react";
import type { Image } from "src/utils/types";

const useOptimizedImage = (image: Image) => {
    const [optimizedSize, setOptimizedSize] = useState(0);
    const [optimizedURL, setOptimizedURL] = useState(image.optimizedURL);
    const [downloadable, setDownloadable] = useState(image.optimizedURL);

    const updateImageSize = () => {
        const intervalID = setInterval(() => {
            fetch(optimizedURL.replace("http://", "https://")).then(response => {
                if(response.ok) clearInterval(intervalID);
                else return;
                response.blob().then(blob => {
                    setOptimizedSize(blob.size);
                    setDownloadable(URL.createObjectURL(blob));
                });
            });
        }, 500);
        return () => clearInterval(intervalID);
    }

    const fixImageURL = () => {
        setOptimizedURL(image.optimizedURL + ".png");
    }

    useEffect(updateImageSize, []);
    
    return {
        optimizedSize,
        optimizedURL,
        downloadable,
        fixImageURL
    }
}

export default useOptimizedImage;