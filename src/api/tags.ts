module.exports = (axios: any) => () => ({
  async getTags() {
    try {
      return await axios.get(`/tags`).then((response: any) => response.data);
  } catch (error: any) {
      throw new Error(error) 
  }
      
    },
  
    async getTagBySlug(slug: String) {
      try {
        return await axios.get(encodeURI(`/tags?slug=${slug}`)).then((response: any) => response.data);
    } catch (error: any) {
        throw new Error(error) 
    }
      
    },
  });