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
    getPages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(`/pages`).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
    getPageBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield axios.get(encodeURI(`/pages?slug=${slug}`)).then((response) => response.data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    },
});
