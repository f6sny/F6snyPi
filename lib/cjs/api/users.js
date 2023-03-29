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
// api/users.js
module.exports = (axios) => () => ({
    getCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(`/users/me`).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(encodeURI(`/users?username=${username}`)).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    updateUserData(user_id, user_data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return axios.put(`/users/${user_id}`, user_data).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.post(`/auth/forgot-password`, { email: email });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    resetPassword(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.post(`/auth/reset-password`, data).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
});
