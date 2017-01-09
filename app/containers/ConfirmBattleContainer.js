import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

export default class ConfirmBattleContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			playerInfo: []
		}
	}

	componentDidMount() {
		const query = this.props.location.query;
		// Fetch info from github, then update the state
	}

	render() {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playerInfo} />
		)
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}
