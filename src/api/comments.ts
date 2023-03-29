module.exports = (axios: any) => () => ({
	/**
	 * Retrieves the latest comments across all jokes.
	 * @returns {Promise} A promise that resolves to an array of comments.
	 */
	async getLatestComments() {
		try {
			return await axios.get("/globalcalls/getLatestComments").then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	/**
	 * Retrieves the comments for a specific joke.
	 * @param {Number} id The ID of the joke.
	 * @returns {Promise} A promise that resolves to an array of comments.
	 */
	async getJokeComments(id: Number) {
		try {
			return await axios.get(`/comments/jokes:${id}?_sort=id:desc`).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},
	
	/**
	 * Retrieves all comments for moderation.
	 * @returns {Promise} A promise that resolves to an array of comments.
	 */
	async getComments() {
		try {
			return await axios.get(`/comments/moderation/all`).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	/**
	 * Posts a new comment for a specific joke.
	 * @param {String} comment The comment text.
	 * @param {Number} joke_id The ID of the joke.
	 * @returns {Promise} A promise that resolves to the new comment.
	 */
	async postComment(comment: String, joke_id: Number) {
		try {
			return await axios.post(`/comments/jokes:${joke_id}`, comment).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	/**
	 * Retrieves all comments for a specific user.
	 * @param {Number} user_id The ID of the user.
	 * @returns {Promise} A promise that resolves to an array of comments.
	 */
	async getUserCommentsByID(user_id: Number) {
		try {
			return await axios.get(encodeURI(`/users/${user_id}/comments`)).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},
});
