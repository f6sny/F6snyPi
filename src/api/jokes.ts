module.exports = (axios: any) => () => ({
    /**
    * Fetches jokes from the API.
    * 
    * @param {number} [start=0] - The starting index for fetching jokes.
    * @returns {Promise<Array>} A Promise that resolves to an array of jokes.
    * @throws {Error} If an error occurs while fetching the jokes.
    */
    async getJokes(start = 0) {
        try {
            return await axios.get(`/jokes?_start=${start}`).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  
    async getJokeBySlug(slug: String) {
        try {
            return await axios.get(encodeURI(`/jokes?slug=${slug}`)).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  
    async getJokeByID(id: Number) {
        try {
            return await axios.get(`/jokes/${id}`).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  
    async searchJokesByKeywords(keywords: String, start = 0) {
        try {
            return await axios.get(
                encodeURI(`/jokes?_q=${keywords}&_start=${start}`)
              ).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  
    async getPendingJokes() {
        try {
            return await axios.get(`/jokes/pending`).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  
    async postJoke(joke: Object) {
        try {
            return await axios.post(`/jokes`, joke).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  
    async getTagJokesBySlug(slug: String, start = 0) {
        try {
            return await axios.get(encodeURI(`/jokes?tags.slug=${slug}&_start=${start}`)).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  
    async vote(id: Number, value: String) {
        try {
            return await axios.post(`/jokes/${id}/vote`, {data: { value: `${value}` }}).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message)
        }
    },
  
    async getUserJokesByID(user_id: Number, start = 0) {
        try {
            return await axios.get(encodeURI(`/jokes?author=${user_id}&_sort=id:desc&_start=${start}`)).then((response: any) => response.data);
        } catch (error: any) {
            throw new Error(error.message) 
        }
    },
  });