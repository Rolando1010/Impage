import styles from "src/styles/optimize.module.css";
import useWebsiteImages from "src/hooks/use-website-images";
import URLForm from "./url-form";
import WebsiteImagesData from "./website-images-data";

const Optimize = () => {
    const {url, websiteImages} = useWebsiteImages();

    return (<>
        <h1 className={styles.title}>Optimiza las imágenes de tu sitio web</h1>
        <URLForm url={url}/>
        <WebsiteImagesData url={url} websiteImages={websiteImages}/>
    </>);
}

export default Optimize;