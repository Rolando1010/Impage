import styles from "src/styles/optimize.module.css";
import useWebsiteImages from "src/hooks/use-website-images";
import URLForm from "./url-form";
import WebsiteImagesData from "./website-images-data";
import Loader from "./loader";

const Optimize = () => {
    const { url, websiteImages, isLoading, isError } = useWebsiteImages();

    return (<>
        <h1 className={styles.title}>Optimiza las imágenes de tu sitio web</h1>
        <URLForm url={url}/>
        <WebsiteImagesData url={url} websiteImages={websiteImages}/>
        {isLoading && <Loader/>}
        {isError && <ErrorMessage/>}
    </>);
}

const ErrorMessage = () => {
    return (<>
        <p>
            <img src="/danger.svg"/>
            No se pudieron extraer las imágenes del sitio web.
        </p>
        <style jsx>{`
            p {
                display: flex;
                align-items: center;
                gap: 10px;
                justify-content: center;
                background-color: var(--danger-1);
                margin: 20px;
                padding: 20px 15px;
                border-radius: var(--border-radius);
                font-size: 20px;
            }
        `}</style>
    </>);
}

export default Optimize;