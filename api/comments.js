module.exports = (axios) => () => ({
	async getLatestComments() {
		try {
			return await axios.get("/globalcalls/getLatestComments").then(response => response.data);;
		} catch (error) {
			throw new Error(error);
		}
	},

	async getJokeComments(id) {
		try {
			return await axios.get(`/comments/jokes:${id}?_sort=id:desc`).then(response => response.data);;
		} catch (error) {
			throw new Error(error);
		}
	},
	
	async getComments() {
		try {
			return await axios.get(`/comments/moderation/all`).then(response => response.data);;
		} catch (error) {
			throw new Error(error);
		}
	},

	async postComment(comment, joke_id) {
		try {
			return await axios.post(`/comments/jokes:${joke_id}`, comment).then(response => response.data);;
		} catch (error) {
			throw new Error(error);
		}
	},

	async getUserCommentsByID(user_id) {
		try {
			return await axios.get(encodeURI(`/users/${username}/comments`)).then(response => response.data);;
		} catch (error) {
			throw new Error(error);
		}
	},
});
