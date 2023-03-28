const f6snypi = require('./main');

(async () =>{
    const result =  await f6snypi.jokes().getJokes();
    console.log(result.data)
})();