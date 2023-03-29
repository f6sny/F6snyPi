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
     * Retrieves the latest comments across all jokes.
     * @returns {Promise} A promise that resolves to an array of comments.
     */
    getLatestComments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get("/globalcalls/getLatestComments").then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    /**
     * Retrieves the comments for a specific joke.
     * @param {Number} id The ID of the joke.
     * @returns {Promise} A promise that resolves to an array of comments.
     */
    getJokeComments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(`/comments/jokes:${id}?_sort=id:desc`).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    /**
     * Retrieves all comments for moderation.
     * @returns {Promise} A promise that resolves to an array of comments.
     */
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(`/comments/moderation/all`).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    /**
     * Posts a new comment for a specific joke.
     * @param {String} comment The comment text.
     * @param {Number} joke_id The ID of the joke.
     * @returns {Promise} A promise that resolves to the new comment.
     */
    postComment(comment, joke_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.post(`/comments/jokes:${joke_id}`, comment).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    /**
     * Retrieves all comments for a specific user.
     * @param {Number} user_id The ID of the user.
     * @returns {Promise} A promise that resolves to an array of comments.
     */
    getUserCommentsByID(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(encodeURI(`/users/${user_id}/comments`)).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
});
