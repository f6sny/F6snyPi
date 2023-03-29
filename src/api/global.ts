module.exports = (axios: any) => () => ({
    // Fetch counters from the backend
    async getCounters() {
        try {
            return await axios.get("/globalcalls/counters").then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error);
        }
    },
});
