"use strict";
module.exports = (axios) => () => ({
    async getTags() {
        try {
            return await axios.get(`/tags`).then((response) => response.data);
        }
        catch (error) {
            throw new Error(error);
        }
    },
    async getTagBySlug(slug) {
        try {
            return await axios.get(encodeURI(`/tags?slug=${slug}`)).then((response) => response.data);
        }
        catch (error) {
            throw new Error(error);
        }
    },
});
