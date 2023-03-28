// api/users.js
module.exports = (axios) => () => ({
	async getCurrentUser() {
		try {
			return await axios.get(`/users/me`).then(response => response.data);
		} catch (error) {
			throw new Error(error);
		}
	},

	async getUserByUsername(username) {
		try {
			return await axios.get(encodeURI(`/users?username=${username}`)).then(response => response.data);
		} catch (error) {
			throw new Error(error);
		}
	},

	async updateUserData(user_id, user_data) {
		try {
			return axios.put(`/users/${user_id}`, user_data).then(response => response.data);
		} catch (error) {
			throw new Error(error);
		}
	},

	async forgotPassword(email) {
		try {
			return await axios.post(`/auth/forgot-password`, { email: email });
		} catch (error) {
			throw new Error(error);
		}
	},

	async resetPassword(data) {
		try {
			return await axios.post(`/auth/reset-password`, data).then(response => response.data);
		} catch (error) {
			throw new Error(error);
		}
	},
});
