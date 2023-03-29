module.exports = (axios: any) => () => ({
    /**
     * Fetch counters from the backend
     *
     * @returns {Promise} Promise object representing the counters data
     * @throws Will throw an error if the request fails
     */
    async getCounters() {
        try {
            return await axios.get("/globalcalls/counters").then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error);
        }
    },
});
