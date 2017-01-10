import axios from 'axios';

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo(username) {
	return axios.get(`https://api.github.com/users/${username}${param}`);
}

function getRepos(username) {
	// fetch usernames repos
	return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
	// calculate all stars the user has
	return repos.data.reduce((prev, current) => {
		return prev + current.stargazers_count
	}, 0);
}

function getPlayersData(player) {
	// get repos
	// getTotalStars
	// return object with data
	return getRepos(player.login)
		.then(getTotalStars)
		.then((totalStars) => {
			return {
				followers: player.followers,
				totalStars
			}
		});
}

function calculateScores(players) {
	// return array, after determining winner
	const scores = [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars
	]
	console.log(players[0]);
	console.log(players[0].followers);
	return scores
}

export const helpers = {
	getPlayersInfo: (players) => {
		return axios.all(players.map((username) => {
			return getUserInfo(username)
		})).then((info) => {
			return info.map((user) => {
				return user.data;
			});
		}).catch((err) => {
			console.warn('ERROR in getPlayersInfo', err);
		});
	},
	battle: (players) => {
		const playerOneData = getPlayersData(players[0]);
		const playerTwoData = getPlayersData(players[1]);

		return axios.all([playerOneData, playerTwoData])
			.then(calculateScores)
			.catch((err) => {
				console.warn('ERROR in getPlayersInfo:', err);
			});
	}
}
