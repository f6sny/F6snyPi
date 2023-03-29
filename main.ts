const f6snypi = require('./lib/cjs');

(async () =>{
    try {
      const result =  await f6snypi.jokes().getJokes();
      console.log(result.slug)
    } catch (error) {
      console.log(error)
    }
})();