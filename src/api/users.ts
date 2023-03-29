// api/users.js
module.exports = (axios: any) => () => ({
	async getCurrentUser() {
		try {
			return await axios.get(`/users/me`).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	async getUserByUsername(username: String) {
		try {
			return await axios.get(encodeURI(`/users?username=${username}`)).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	async updateUserData(user_id: Number, user_data: Object) {
		try {
			return axios.put(`/users/${user_id}`, user_data).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},

	async forgotPassword(email: String) {
		try {
			return await axios.post(`/auth/forgot-password`, { email: email });
		} catch (error: any) {
			throw new Error(error);
		}
	},

	async resetPassword(data: Object) {
		try {
			return await axios.post(`/auth/reset-password`, data).then((response: any) => response.data);
		} catch (error: any) {
			throw new Error(error);
		}
	},
});
