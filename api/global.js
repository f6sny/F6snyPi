module.exports = (axios) => () => ({
    // Fetch counters from the backend
    async getCounters() {
        try {
            return await axios.get("/globalcalls/counters").then(response => response.data);
        } catch (error) {
            throw new Error(error);
        }
    },
});
