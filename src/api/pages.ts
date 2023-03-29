module.exports = (axios: any) => () => ({
    async getPages() {
        try {
            return await axios.get(`/pages`).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error);
        }
    },

    async getPageBySlug(slug: String) {
        try {
            return await axios.get(encodeURI(`/pages?slug=${slug}`)).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error);
        }
    },
});
