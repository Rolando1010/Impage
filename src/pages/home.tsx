import Link from "next/link";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import styles from "src/styles/home.module.css";
import buttonStyles from "src/styles/button.module.css";
import { Gutter, GutterContainer } from "src/components/gutters";
import { formatBytes } from "src/utils/text";

const Home = ({ exampleURL, exampleSize, optimizedURL, optimizedSize }: {
    exampleURL: string,
    exampleSize: number,
    optimizedURL: string,
    optimizedSize: number
}) => {
    return (<>
        <GutterContainer>
            <Gutter percentage={50}>
                <section className={styles.description}>
                    <div className={styles.container}>
                        <h1><span>Optimiza</span> las <span>imágenes</span> de tu sitio web fácil y rápidamente sólo ingresando el link.</h1>
                        <p>Sólo ingresando el link de tu sitio web podrás obtener todas las imágenes que aparecen en ella optimizadas de una manera fácil y rápida.</p>
                        <Link href="/optimizar" className={buttonStyles.button}>
                            Optimiza las imágenes de tu web
                        </Link>
                    </div>
                </section>
            </Gutter>
            <Gutter percentage={50}>
                <div className={styles.container}>
                    <p className={styles.left}><span>Original:</span> {formatBytes(exampleSize)}</p>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={exampleURL} alt="Imágen sin optimizar"/>}
                        itemTwo={<ReactCompareSliderImage src={optimizedURL} alt="Imágen optimizada"/>}
                    />
                    <p className={styles.right}><span>Optimizada:</span> {formatBytes(optimizedSize)}</p>
                </div>
            </Gutter>
        </GutterContainer>
    </>);
}

export default Home;