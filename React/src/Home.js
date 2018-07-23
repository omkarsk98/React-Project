import React from 'react';
import axios from "axios";
import Counter from './Counter.js'
import store from './store/';
import { Button, Alert } from 'reactstrap';
const server = require('./serverip');


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.x = this.x.bind(this);
		this.state = {
			user: 'Hey',
			local_ip: '',
			external_ip: ''
		}

	}
	componentDidMount() {
		axios.get("http://" + server.ip + ":3001/ip").then(result => {
			return result.data;
		}).then(data => {
			console.log(data);
			this.setState({
				local_ip: data.local_ip,
				external_ip: data.external
			})
		}).catch(err => {
			console.log(err);
		});
	}
	x(e) {
		axios.get("http://" + server.ip + ":3001/users").then(result => {
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
					Local IP:{this.state.local_ip}
					{/* <br/>
					External IP:{this.state.external_ip} */}
				</Alert>

				<h2>Home</h2>
				<p>Some description about home in this section</p>
				<p>Hello.. <br />This is just to give an example.<br />Simply to fill up the lines..</p>
				<Counter store={store} />
				<Button color='danger' onClick={this.x}>Programmer</Button>
				{this.state.user}
			</div>
		);
	}
}


export default Home;