"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = (axios) => () => ({
    /**
    * Fetches jokes from the API.
    *
    * @param {number} [start=0] - The starting index for fetching jokes.
    * @returns {Promise<Array>} A Promise that resolves to an array of jokes.
    * @throws {Error} If an error occurs while fetching the jokes.
    */
    getJokes(start = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(`/jokes?_start=${start}`).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    getJokeBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(encodeURI(`/jokes?slug=${slug}`)).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    getJokeByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(`/jokes/${id}`).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    searchJokesByKeywords(keywords, start = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(encodeURI(`/jokes?_q=${keywords}&_start=${start}`)).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    getPendingJokes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(`/jokes/pending`).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    postJoke(joke) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.post(`/jokes`, joke).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    getTagJokesBySlug(slug, start = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(encodeURI(`/jokes?tags.slug=${slug}&_start=${start}`)).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    vote(id, value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.post(`/jokes/${id}/vote`, { data: { value: `${value}` } }).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    getUserJokesByID(user_id, start = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(encodeURI(`/jokes?author=${user_id}&_sort=id:desc&_start=${start}`)).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
});
