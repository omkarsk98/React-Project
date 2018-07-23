import React from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import axios from "axios";

const server = require('./serverip');

var style = {
    padding: '20px',
    textAlign: 'center',
    margin: '10px'
}

var button = {
    margin: '5px'
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.addEmail = this.addEmail.bind(this);
        this.verify = this.verify.bind(this);
        this.validate = this.validate.bind(this);
        this.addUserName = this.addUserName.bind(this);
        this.addPass = this.addPass.bind(this);
        this.state = {
            otp: '',//otp sent by server and to check if otp is right
            mail: '',//mail id where otp has to be sent
            formFilled: false,
            username: '',
            pass: '',
            result: ''
        }
    }
    addEmail(event) {
        this.setState({ mail: event.target.value })
    }
    addUserName(event) {
        this.setState({ username: event.target.value })
    }
    addPass(event) {
        this.setState({ pass: event.target.value })
    }
    verify(e) {//this will receive otp
        axios.post("http://" + server.ip + ":3001/otp", { username: this.state.username, email: this.state.mail, password: this.state.pass }).then(result => {
            return result.data;
        }).then(data => {
            this.setState({
                otp: data.otp
            });
        }).catch(err => {
            console.log(err);
        });
        this.setState({ formFilled: true })
    }
    validate() {
        let check = document.getElementById('otp').value;
        if (this.state.otp == check) {
            axios.post("http://" + server.ip + ":3001/signup", { username: this.state.username, verified: true }).then(result => {
                return result.data;
            }).then(() => this.setState({ result: 'verified' }))
                .catch(err => {
                    console.log(err);
                });
        }
    }
    render() {
        return (
            <div>
                {(() => {
                    if (!this.state.formFilled && !this.state.result) {
                        return (
                            <Form style={style}>
                                <FormGroup>
                                    <Label>Set UserName:</Label>
                                    <Input type='text' name='username' placeholder='eg. IamUser' onChange={this.addUserName} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Set Email:</Label>
                                    <Input type='email' name='email' placeholder='eg. user@example.com' onChange={this.addEmail} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Set Password:</Label>
                                    <Input type='password' name='password' placeholder='eg. ********' onChange={this.addPass} required />
                                </FormGroup>
                                <Button color='success' style={button} onClick={this.verify}>Verify</Button>
                            </Form>
                        );
                    }
                    else if (this.state.formFilled && !this.state.result) {
                        return (
                            <div style={style}>
                                6 digit OTP sent to your email.
                                    <FormGroup>
                                    <Label>Confirm OTP:</Label>
                                    <Input type='text' name='otp' id='otp' placeholder='eg. IamUser' />
                                    <Button color='success' style={button} onClick={this.validate}>Sign Up</Button>
                                </FormGroup>
                            </div>
                        );
                    }
                    if (this.state.formFilled && this.state.result) {
                        return (
                            <div>
                                <Alert color="success" style={style}>
                                    Thank you for signup!
                                    {this.state.ip}
                                </Alert>
                            </div>
                        )
                    }
                })()}
            </div>
        );
    }
}