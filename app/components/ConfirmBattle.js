import React from 'react';
import { Link } from 'react-router';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';

const height = {
	height: '15px'
};

function puke(obj) {
	return<pre>{JSON.stringify(obj, null, '')}</pre>
}

export default function ConfirmBattle(props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div className="jumbotron col-sm-12 text-center">
				<h1>Confirm Players</h1>
				<div className='col-sm-8 col-sm-offset-2'>
					<UserDetailsWrapper header='Player One'>
						<UserDetails info={props.playersInfo[0]} />
					</UserDetailsWrapper>
					<UserDetailsWrapper header='Player Two'>
						<UserDetails info={props.playersInfo[1]} />
					</UserDetailsWrapper>
				</div>
				<div className='col-sm-8 col-sm-offset-2'>
					<div className='col-sm-12'>
						<button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
							Initiate Battle!
						</button>
					</div>
					<div className='col-sm-12' style={height}></div>
					<div className='col-sm-12'>
						<Link to='/playerOne'>
							<button type='button' className='btn btn-lg btn-danger'>
								Reselect Player
							</button>
						</Link>
					</div>
				</div>
			</div>
}

ConfirmBattle.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	onInitiateBattle: React.PropTypes.func.isRequired,
	playersInfo: React.PropTypes.array.isRequired
}
