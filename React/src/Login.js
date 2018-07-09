import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

var button = {
    margin: '5px'
}

export default class Login extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label>UserName:</Label>
                    <Input type='text' name='username' placeholder='eg. IamUser' />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input type='password' name='password' placeholder='eg. ********' />
                </FormGroup>
                <Button color='success' style={button}>Login</Button>
            </Form>
        );
    }
}