module.exports = axios => () => ({
    async getJokes(start = 0) {
        try {
            return await axios.get(`/jokes?_start=${start}`).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async getJokeBySlug(slug) {
        try {
            return await axios.get(encodeURI(`/jokes?slug=${slug}`)).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async getJokeByID(id) {
        try {
            return await axios.get(`/jokes/${id}`).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async searchJokesByKeywords(keywords, start) {
        try {
            return await axios.get(
                encodeURI(`/jokes?_q=${keywords}&_start=${start}`)
              ).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async getPendingJokes() {
        try {
            return await axios.get(`/jokes/pending`).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async postJoke(joke) {
        try {
            return await axios.post(`/jokes`, joke).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async getTagJokesBySlug(slug, start) {
        try {
            return await axios.get(encodeURI(`/jokes?tags.slug=${slug}&_start=${start}`)).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async vote(id, value) {
        try {
            return await axios.post(`/jokes/${id}/vote`, {data: { value: `${value}` }}).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  
    async getUserJokesByID(user_id, start) {
        try {
            return await axios.get(encodeURI(`/jokes?author=${user_id}&_sort=id:desc&_start=${start}`)).then(response => response.data);
        } catch (error) {
            throw new Error(error) 
        }
    },
  });