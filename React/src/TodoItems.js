//This Component is for listing the tasks
import React from "react";
import { Segment, Button } from 'semantic-ui-react/dist/commonjs';
 
class TodoItems extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.createTasks = this.createTasks.bind(this);
	}
	delete(key) {
		this.props.delete(key);
	}
	createTasks(b1) {
		return <li>{b1.text} <Button size="mini" color="red" onClick={() => this.delete(b1.key)}>x</Button></li>
	}
	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		return (
			<Segment textAlign="left">
				{listItems}
			</Segment>
		);
	}
};
 
export default TodoItems;