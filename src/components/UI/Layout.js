import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

class Layout extends Component {

    render(){
        return(
            <>
                <Link to="/login">Log In</Link> | {" "}
                <Link to="/register">Register</Link>

                <Outlet />
            </>
        )
    };
}

export default Layout;