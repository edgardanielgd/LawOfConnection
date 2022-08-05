import React, { Component } from "react";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Layout from "./../pages/Layout";

class App extends Component{

    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
