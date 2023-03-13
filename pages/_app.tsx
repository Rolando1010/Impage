import Head from "next/head";
import type { AppProps } from "next/app";
import RootLayout from "src/layouts/root";
import "src/styles/global.css";

export default ({ Component, pageProps }: AppProps) => {
    return (<>
        <Head>
            <title>Impage</title>
            <link rel="icon" href="/icon.png"/>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
            <meta name="google-site-verification" content="32l8ABxB2t4tv2prM20trl2k6PTDL561ti-vqHOtoYg"/>
            <meta name="description" content="Impage | Optimizador de imágenes de sitios web | Optimiza tu sitio web sólo ingresando el url"/>
            <meta name="keywords" content="Impage Optimizador imágenes sitios web URL"/>
            <meta property="og:title" content="Optimizador de imágenes de sitios web"/>
            <meta property="og:type" content="website"/>
            <meta property='og:locale' content="es_ES"/>
            <meta property="og:url" content="impage.vercel.app"/>
            <meta property="og:image" content="/icon.png"/>
            <meta property="og:image:alt" content="icono-Impage"/>
        </Head>
        <RootLayout>
            <Component {...pageProps}/>
        </RootLayout>
    </>);
}