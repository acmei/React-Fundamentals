import axios from 'axios';

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo(username) {
	return axios.get(`https://api.github.com/users/${username}${param}`)
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
	}
}
