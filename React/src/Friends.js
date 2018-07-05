import React from 'react';
import axios from "axios";
import { Button } from 'reactstrap';

export default class Friends extends React.Component {
	constructor(props) {
		super(props);
		this.friend = this.friend.bind(this);
		this.state = {
			status: ''
		}
	}
	friend(e) {
		axios.get("http://localhost:3001/friends").then(result => {
			return result.data;
		}).then(data => {
			this.setState({
				user: data
			})
		}).catch(err => {
			console.log(err);
		});
	}
	render () {
		return (
			<div>
				<h2>Home</h2>
				<p>Some description about home in this section</p>
				<p>Hello.. <br/>This is just to give an example.<br/>Simply to fill up the lines..</p>
				<Button color='success' onClick={this.friend}>Show Friend</Button>
				<br /><br /><br />
				{this.state.status}
			</div>
		);
	}
}