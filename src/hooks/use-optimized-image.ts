import { useEffect, useState } from "react";
import type { Image } from "src/utils/types";

const useOptimizedImage = (image: Image) => {
    const [optimizedSize, setOptimizedSize] = useState(0);
    const [optimizedURL, setOptimizedURL] = useState(image.optimizedURL);
    const [downloadable, setDownloadable] = useState(image.optimizedURL);

    const updateImageSize = () => {
        let tries = 0;
        const intervalID = setInterval(() => {
            fetch(optimizedURL).then(response => {
                if(response.ok) clearInterval(intervalID);
                else return;
                if(tries++ === 10) {
                    clearInterval(intervalID);
                    return;
                }
                response.blob().then(blob => {
                    setOptimizedSize(blob.size);
                    setDownloadable(URL.createObjectURL(blob));
                });
            });
        }, 500);
        return () => clearInterval(intervalID);
    }

    const fixImageURL = () => {
        const extension = "." + image.name.split(".").at(-1);
        setOptimizedURL(image.optimizedURL + extension);
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