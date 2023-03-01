import Navbar from "./navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (<>
        <Navbar/>
        {children}
    </>);
}

export default RootLayout;