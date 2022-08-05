import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {

    constructor( props ){
        super( props );

        this.nickname = null;
        this.password = null;
    }
    

    handleSubmit = ( event ) => {

        event.preventDefault();

        const body = {
            nickname: this.nickname.value,
            password: this.password.value
        };

        const request = new Request(
            "http://localhost:3000/api/v1/login",
            {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify( body )
            }
        )

        fetch( request )
        .then( response => {
            response.json().then( data => {
                console.log( data );
            })
        })
        .catch( error => {
            console.log( error );
        });
    }

    render(){
        return(
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            
                <Form onSubmit={ this.handleSubmit }>
                    <Form.Group className="mb-2" controlId="grpNickname">
                        <Form.Label>
                            Nickname
                        </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Type your nickname!"
                            ref = { (control) => {
                                    this.nickname = control;
                                }
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="grpPassword">

                        <Form.Label>
                            Password
                        </Form.Label>

                        <Form.Control 
                            type="password" 
                            placeholder="Type your hyper secret password"
                            ref = { (control) => {
                                    this.password = control;
                                }
                            }
                        />
                    </Form.Group>

                    <Button variant="primary" type="sbumit">
                        Log In
                    </Button>
                </Form>
            </div>
        )
    };
}


export default Login;