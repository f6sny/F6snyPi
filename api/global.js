module.exports = (axios) => () => ({
    // Fetch counters from the backend
    async getCounters() {
        try {
            return await axios.get("/globalcalls/counters");
        } catch (error) {
            throw new Error(error);
        }
    },
});
