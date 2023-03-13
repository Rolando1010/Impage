import { useEffect, useRef } from "react";
import styles from "src/styles/optimize.module.css";
import type { WebsiteImages } from "src/utils/types";
import { GutterContainer, Gutter } from "src/components/gutters";
import ImageOptimization from "./image-optimization";
import DownloadAllImages from "./download-all-images";

const WebsiteImagesData = ({ url, websiteImages }: {
    url: string,
    websiteImages: WebsiteImages | null
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(websiteImages) containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [websiteImages]);

    if(!websiteImages) return <></>;

    return (<>
        <div className={styles.websiteData} ref={containerRef}>
            <header>
                <img src={websiteImages.icon} alt={`ícono de ${websiteImages.title}`}/>
                <h3>{websiteImages.title}</h3>
                <a href={url} target="_blank" title="Ir a sitio">
                    <img src="/redirection.svg" alt={`redirección a ${websiteImages.title} con imágenes a optimizar`}/>
                </a>
            </header>
            <p>{websiteImages.description}</p>
        </div>
        <DownloadAllImages images={websiteImages.images}/>
        <GutterContainer>
            {websiteImages.images.map((image, index) =>
                <Gutter percentage={50} key={`image-${index}`}>
                    <ImageOptimization image={image}/>    
                </Gutter>
            )}
        </GutterContainer>
    </>);
}

export default WebsiteImagesData;