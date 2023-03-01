import styles from "src/styles/optimize.module.css";
import type { Image } from "src/utils/types";
import useOptimizedImage from "src/hooks/use-optimized-image";
import ImageTransition from "./image-transition";

const ImageOptimization = ({ image }: { image: Image }) => {
    const {
        optimizedSize,
        optimizedURL,
        downloadable,
        fixImageURL
    } = useOptimizedImage(image);

    return (
        <section className={styles.websiteImageContainer}>
            <article className={styles.titleContainer}>
                <h3>{image.name}</h3>
                <a download={image.name} href={downloadable}>
                    <img src="/download-light.svg" title="Descargar imágen"/>
                </a>
            </article>
            <ImageTransition
                originalURL={image.originalURL}
                originalSize={image.originalSize}
                optimizedURL={optimizedURL}
                optimizedSize={optimizedSize}
                onOptimizedError={fixImageURL}
            />
        </section>
    );
}

export default ImageOptimization;