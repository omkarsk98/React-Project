import React from 'react';
import axios from "axios";
import { Button } from 'reactstrap';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.x = this.x.bind(this);
		this.state = {
			user: 'Hey'
		}
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
	
	render () {
		return (
			<div>
				<h2>Home</h2>
				<p>Some description about home in this section</p>
				<p>Hello.. <br/>This is just to give an example.<br/>Simply to fill up the lines..</p>
				<Button color='danger' onClick={this.x}>Programmer</Button>
				<br /><br />
				{this.state.user}
			</div>
		);
	}
}

export default Home;