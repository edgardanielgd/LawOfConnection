import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Register extends Component {

    constructor( props ){
        super( props );

        this.nickname = null;
        this.password = null;
        this.profile_description = null;
        this.email = null;
        this.country = null;
    }

    handleSubmit = ( event ) => {

        event.preventDefault();

        const body = {
            nickname: this.nickname.value,
            password: this.password.value,
            profile_description: this.profile_description.value,
            email: this.email.value,
            countryID: this.country.value
        };

        const request = new Request(
            "http://localhost:3000/api/v1/register",
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
                <Form onSubmit={ this.handleSubmit } >
                    <Form.Group className="mb-2" controlId="grpNickname">
                        <Form.Label>
                            Nickname
                        </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Type your desired nickname!"
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
                            placeholder="Type your desired hyper secret password"
                            ref = { (control) => {
                                    this.password = control;
                                }
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="grpDescription">

                        <Form.Label>
                            Tell us a bit about yourself!
                        </Form.Label>

                        <Form.Control 
                            as= "textarea"
                            rows={4}
                            placeholder="What a nice description!"
                            ref = { (control) => {
                                    this.profile_description = control;
                                }
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="grpEmail">

                        <Form.Label>
                            Your email
                        </Form.Label>

                        <Form.Control 
                            type="email" 
                            placeholder="Do not forget to check your syntax!"
                            ref = { (control) => {
                                    this.email = control;
                                }
                            }
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-2" controlId="grpCountry">

                        <Form.Label>
                            Finally, please choose your country
                        </Form.Label>

                        <Form.Select 
                            ref = { (control) => {
                                    this.country = control;
                                }
                            }
                        >
                            <option value={1}>Country 1</option>
                            <option value={2}>Country 2</option>
                            <option value={3}>Country 3</option>

                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="sbumit">
                        Log In
                    </Button>
                </Form>
            </div>
        )
        
    };
}

export default Register;