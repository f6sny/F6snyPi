module.exports = (axios: any) => () => ({
	async getLatestComments() {
		try {
			return await axios.get("/globalcalls/getLatestComments").then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	async getJokeComments(id: Number) {
		try {
			return await axios.get(`/comments/jokes:${id}?_sort=id:desc`).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},
	
	async getComments() {
		try {
			return await axios.get(`/comments/moderation/all`).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	async postComment(comment: String, joke_id: Number) {
		try {
			return await axios.post(`/comments/jokes:${joke_id}`, comment).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	async getUserCommentsByID(user_id: Number) {
		try {
			return await axios.get(encodeURI(`/users/${user_id}/comments`)).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},
});
