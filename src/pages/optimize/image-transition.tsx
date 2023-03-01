import { Gutter, GutterContainer } from "src/components/gutters"
import { formatBytes } from "src/utils/text";

const ImageTransition = ({
    originalURL,
    originalSize,
    optimizedURL,
    optimizedSize,
    onOptimizedError
}: {
    originalURL: string,
    originalSize: number
    optimizedURL: string
    optimizedSize: number
    onOptimizedError?: () => void
}) => {
    return (<>
        <GutterContainer>
            <Gutter percentage={40}>
                <ImageDetail
                    url={originalURL}
                    size={originalSize}
                />
            </Gutter>
            <Gutter percentage={20}>
                <div className="arrowsContainer">
                    <img className="right" src="/right.svg"/>
                    <img className="down" src="/down.svg"/>
                </div>
            </Gutter>
            <Gutter percentage={40}>
                <ImageDetail
                    url={optimizedURL}
                    size={optimizedSize}
                    onError={onOptimizedError}
                />
            </Gutter>
        </GutterContainer>
        <style jsx>{`
            .arrowsContainer {
                display: flex;
                align-items: center;
                height: 100%;
                justify-content: center;
                padding: 0 5px;
                box-sizing: border-box;
            }

            .right, .down {
                width: 100px;
                max-width: 100%;
            }

            .down {
                display: none;
            }

            @media (max-width: 800px){
                .right {
                    display: none;
                }

                .down {
                    display: inline-block;
                }
            }
        `}</style>
    </>);
}

const ImageDetail = ({ url, size, onError }: {
    url: string,
    size: number,
    onError?: () => void
}) => {
    return (<>
        <p>{formatBytes(size)}</p>
        <div>
            <img src={url} onError={onError}/>
        </div>
        <style jsx>{`
            p {
                margin: 10px;
            }
            
            div {
                text-align: center;
            }

            img {
                max-width: 100%;
            }
        `}</style>
    </>);
}

export default ImageTransition;