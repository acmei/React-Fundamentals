import React from 'react';

function puke(obj) {
	return<pre>{JSON.stringify(obj, null, '')}</pre>
}

export default function ConfirmBattle(props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div> CONFIRM BATTLE: {puke(props)} </div>
}
