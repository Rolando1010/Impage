import { useEffect, useState } from "react";
import type { Image } from "src/utils/types";

const useOptimizedImage = (image: Image) => {
    const [optimizedSize, setOptimizedSize] = useState(0);
    const [optimizedURL, setOptimizedURL] = useState(image.optimizedURL);
    const [downloadable, setDownloadable] = useState(image.optimizedURL);

    const updateImageSize = () => {
        fetch(optimizedURL).then(response => {
            response.blob().then(blob => {
                setOptimizedSize(blob.size);
                setDownloadable(URL.createObjectURL(blob));
            });
        });
    }

    const fixImageURL = () => {
        const newImageURL = `${image.optimizedURL}.${image.name.split(".").at(-1)}`;
        setOptimizedURL(newImageURL);
    }

    useEffect(updateImageSize, [optimizedURL]);
    
    return {
        optimizedSize,
        optimizedURL,
        downloadable,
        fixImageURL
    }
}

export default useOptimizedImage;