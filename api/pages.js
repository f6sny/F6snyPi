module.exports = (axios) => () => ({
    async getPages() {
        try {
            return await axios.get(`/pages`);
        } catch (error) {
            throw new Error(error);
        }
    },

    async getPageBySlug(slug) {
        try {
            return await axios.get(encodeURI(`/pages?slug=${slug}`));
        } catch (error) {
            throw new Error(error);
        }
    },
});
