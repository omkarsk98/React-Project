import React from 'react';
import Profile from './Profile';
import Profile2 from './Profile2';
import { Grid } from 'semantic-ui-react';
import Profile3 from './Profile3';
import ProfileFinal from './ProfileFinal';
class Main extends React.Component {
	render () {
		return (
			<div>
				<Grid divided >
					<Grid.Row>
						<Grid.Column mobile={8} tablet={16} computer={4}>
							<Profile />
						</Grid.Column>
						<Grid.Column mobile={8} tablet={16} computer={4}>
							<Profile2 />
						</Grid.Column>
						<Grid.Column mobile={8} tablet={16} computer={4}>
							<Profile3 />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				< hr />
				<ProfileFinal />
			</div>
		);
	}
}
export default Main;