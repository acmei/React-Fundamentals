import React from 'react';
import Results from '../components/Results';
import { helpers as githubHelpers } from '../utils/githubHelpers';

export default class ResultsContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			scores: []
		}
	}

	componentDidMount() {
		githubHelpers.battle(this.props.location.state.playersInfo)
			.then((scores) => {
				this.setState({
					scores,
					isLoading: false
				})
			})
	}

	render() {
		return (
	    <Results
	    	isLoading={this.state.isLoading}
	    	playersInfo={this.props.location.state.playersInfo}
	    	scores={this.state.scores} />
	  )
	}
}
