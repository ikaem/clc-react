import React from "react";

import Header from "./header.component";
import Footer from "./footer.component";
import UserProvider from "../context/user.context";

const Layout = ({children}) => {
    return (
    <UserProvider>
        <Header />
        {children}
        <Footer />
    </UserProvider>
    );
}

export default Layout;