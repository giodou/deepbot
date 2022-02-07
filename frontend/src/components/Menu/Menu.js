import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Menu(){
    return (
        <React.Fragment>
            <Navbar />
            <Sidebar />
        </React.Fragment>
    );
}

export default Menu;