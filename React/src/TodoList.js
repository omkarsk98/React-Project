import React from "react";
import TodoItems from "./TodoItems";
import { Segment, Button, Form } from 'semantic-ui-react';

class TodoList extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.state = {
			items: []
		};
	}
	addItem (a1) {
		var itemArray = this.state.items;
		if (this._inputElement.value !== "") {
			itemArray.push({
				text: this._inputElement.value,
				key: Date.now()
			});
			this.setState({
				items: itemArray
			});
			this._inputElement.value = "";
		}
		console.log(this.state.items);
		a1.preventDefault();
	}
	deleteItem(key) {
		var filteredItems = this.state.items.filter(function (item) {
			return (item.key !== key);
		});
		this.setState({
			items: filteredItems
		});
		console.log(filteredItems);
	}
	render() {
		return (
			<div>
				<Segment inverted compact align="center">
					<Form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} placeholder="enter task"/>
						<br/>
						<Button type="submit" align="center">add</Button>
					</Form>
					<TodoItems entries={this.state.items} delete={this.deleteItem}/>
				</Segment>
			</div>
		);
	}
}
 
export default TodoList;