import styles from "src/styles/optimize.module.css";
import buttonStyles from "src/styles/button.module.css";

const URLForm = ({ url }: { url: string }) => {
    return (
        <form className={styles.urlForm}>
            <label>
                <span>URL:</span>
                <div>
                    <img src="/link.svg"/>
                    <input defaultValue={url} type="url" name="url"/>
                </div>
            </label>
            <center>
                <button className={buttonStyles.button}>Optimizar</button>
            </center>
        </form>
    );
}

export default URLForm;