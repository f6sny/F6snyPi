"use strict";
const instance = require('axios').default;
instance.defaults.baseURL = 'https://api.f6sny.com';
const globalAPI = require('./api/global');
const jokesAPI = require('./api/jokes');
const pagesAPI = require('./api/pages');
const tagsAPI = require('./api/tags');
const commentsAPI = require('./api/comments');
const usersAPI = require('./api/users');
module.exports = {
    global: globalAPI(instance),
    jokes: jokesAPI(instance),
    pages: pagesAPI(instance),
    tags: tagsAPI(instance),
    comments: commentsAPI(instance),
    users: usersAPI(instance),
};
