const GutterContainer = ({ children }: { children: React.ReactNode }) => <>
    <section>{children}</section>
    <style jsx>{`
        section {
            display: flex;
            flex-wrap: wrap;
        }
    `}</style>
</>;

const Gutter = ({ percentage, children }: {
    percentage: number,
    children: React.ReactNode
}) => <>
    <article>{children}</article>
    <style jsx>{`
        article {
            width: ${percentage}%;
        }
        @media (max-width: 800px){
            article {
                width: 100%;
            }
        }
    `}</style>
</>;

export {
    GutterContainer,
    Gutter
}