import { Grid } from "react-loader-spinner";

const Loader = () => {
    return (<>
        <div>
            <Grid
                height="100"
                width="100"
                color="var(--primary-1)"
            />
        </div>
        <p>Cargando, por favor espera...</p>
        <style jsx>{`
            div {
                margin: 35px 0 20px 0;
                display: flex;
                justify-content: center;
            }

            p {
                text-align: center;
                margin: 0;
            }
        `}</style>
    </>);
}

export default Loader;