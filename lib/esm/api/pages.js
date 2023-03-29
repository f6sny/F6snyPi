"use strict";
module.exports = (axios) => () => ({
    async getPages() {
        try {
            return await axios.get(`/pages`).then((response) => response.data);
        }
        catch (error) {
            throw new Error(error);
        }
    },
    async getPageBySlug(slug) {
        try {
            return await axios.get(encodeURI(`/pages?slug=${slug}`)).then((response) => response.data);
        }
        catch (error) {
            throw new Error(error);
        }
    },
});
