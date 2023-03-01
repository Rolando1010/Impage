import { useEffect, useState } from "react";
import type { Image } from "src/utils/types";

const useOptimizedImage = (image: Image) => {
    const [downloadable, setDownloadable] = useState(image.optimizedURL);

    const updateDownloadableSize = () => {
        fetch(image.optimizedURL).then(response => {
            response.blob().then(blob => {
                setDownloadable(URL.createObjectURL(blob));
            });
        });
    }

    useEffect(updateDownloadableSize, []);

    return { downloadable };
}

export default useOptimizedImage;