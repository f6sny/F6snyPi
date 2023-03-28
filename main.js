const axios = require('axios')
axios.defaults.baseURL = 'https://api.f6sny.com';

const globalAPI = require('./api/global')
const jokesAPI = require('./api/jokes')
const pagesAPI = require('./api/pages')
const tagsAPI = require('./api/tags')
const commentsAPI = require('./api/comments')
const usersAPI = require('./api/users')

module.exports = {
  global: globalAPI(axios),
  jokes: jokesAPI(axios),
  pages: pagesAPI(axios),
  tags: tagsAPI(axios),
  comments: commentsAPI(axios),
  users: usersAPI(axios),
}
