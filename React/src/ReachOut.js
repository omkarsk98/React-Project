import React from 'react';
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, UncontrolledAlert } from 'reactstrap';

const server = require('./serverip');

export default class ReachOut extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.state = {
            reply: '',
            name: '',
            message: ''
        }
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }
    handleChangeMessage(event) {
        this.setState({ message: event.target.value })
    }
    add(event) {
        event.preventDefault();
        axios.post("http://" + server.ip + ":3001/reachOut", { name: this.state.name, message: this.state.message }).then(result => {
            return result.data;
        }).then(data => {
            this.setState({
                reply: data
            });
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <div padding="20px">
                <Form>
                    <FormGroup>
                        <Label for="Name">Name:</Label>
                        <Input type="text" name="name" placeholder="eg. Jon Snow" onChange={this.handleChangeName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Message">Message:</Label>
                        <Input type="textarea" name="message" placeholder="eg. I would like to say that..." onChange={this.handleChangeMessage} />
                    </FormGroup>
                    <Button color='success' className='float-left' onClick={this.add}>Submit</Button>
                </Form>
                <br /><br />
                {(() => {
                    if (this.state.reply !== '') {
                        return (
                            <UncontrolledAlert color="primary">
                                {this.state.reply}
                            </UncontrolledAlert>
                        );
                    }
                })()}
            </div>
        );
    }
}