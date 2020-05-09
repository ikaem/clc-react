import React from "react";

import Header from "./header.component";
import Footer from "./footer.component";

const Layout = ({children}) => {
    return (
    <>
        <Header />
        {children}
        <Footer />
    </>
    );
}

export default Layout;