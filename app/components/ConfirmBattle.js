import React from 'react';

export default function ConfirmBattle(props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <p> CONFIRM BATTLE! </p>
}
