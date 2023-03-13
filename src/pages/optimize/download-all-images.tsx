import JSZip from "jszip";
import { saveAs } from "file-saver";
import buttonStyles from "src/styles/button.module.css";
import type { Image } from "src/utils/types";

const download = (images: Image[]) => () => {
    const zip = new JSZip();
    images.forEach(image => {
        const blobPromise = fetch(image.optimizedURL).then(response => {
            return Promise.resolve(response.blob());
        });
        zip.file(image.name, blobPromise);
    });
    zip.generateAsync({ type: "blob" }).then(blob => saveAs(blob, "imágenes optimizadas"))
}

const DownloadAllImages = ({ images }: { images: Image[] }) => {
    return (<>
        <div>
            <button className={buttonStyles.button} onClick={download(images)}>
                <span>Descargar todos</span>
                <img src="/download-dark.svg" alt="descargar todas las imágenes"/>
            </button>
        </div>
        <style jsx>{`
            div {
                display: flex;
                justify-content: flex-end;
                width: 94%;
                margin: auto;
            }

            button {
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 5px 10px;
            }

            img {
                width: 35px;
            }

            @media (max-width: 800px){
                div {
                    width: 90%;
                }
            }
        `}</style>
    </>);
}

export default DownloadAllImages;