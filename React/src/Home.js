import React from 'react';
import axios from "axios";
import { Button, Alert } from 'reactstrap';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.x = this.x.bind(this);
		this.state = {
			user: 'Hey',
			ip:''
		}
		
	}
	componentDidMount(){
		axios.get("http://192.168.1.102:3001/ip").then(result => {
			return result.data;
		}).then(data => {
			this.setState({
				ip: data
			})
		}).catch(err => {
			console.log(err);
		});
	}
	x(e) {
		axios.get("http://localhost:3001/users").then(result => {
			return result.data;
		}).then(data => {
			this.setState({
				user: data
			})
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				{
					//request coming from ..... ip address
					//add something from facebook
					//add something from instagram

				}
				<Alert color="danger">
					<h2>Your current IP address</h2>
					{this.state.ip}
				</Alert>

				<h2>Home</h2>
				<p>Some description about home in this section</p>
				<p>Hello.. <br />This is just to give an example.<br />Simply to fill up the lines..</p>
				<Button color='danger' onClick={this.x}>Programmer</Button>
				{this.state.user}
			</div>
		);
	}
}

export default Home;