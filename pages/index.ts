import { getImageSize } from "src/utils/image";

const getServerSideProps = async () => {
    const exampleURL = "https://res.cloudinary.com/dltopb6qv/image/upload/example.jpg";
    const optimizedURL = "https://res.cloudinary.com/dltopb6qv/image/upload/q_auto:low/example.jpg";
    const [exampleSize, optimizedSize] = await Promise.all([
        getImageSize(exampleURL),
        getImageSize(optimizedURL)        
    ]);
    return {props: {
        exampleURL,
        exampleSize,
        optimizedURL,
        optimizedSize
    }};
}

export {
    getServerSideProps
}

export { default } from "src/pages/home";