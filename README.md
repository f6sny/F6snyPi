# [DEPRECATED] F6snyPI

> ⚠️ **DEPRECATED**: This repository is no longer maintained. Strapi 5's RESTful API and JavaScript SDK now provide sufficient functionality, making this wrapper unnecessary. We recommend using the official Strapi tools instead.

An API wrapper for [https://api.f6sny.com](https://api.f6sny.com) for NPM

## Getting Started
To get started with the SwarmApp API, follow these steps:
1. `$ npm i @6degrees/f6snypi`

## Usage
1. Import into your code
   ```javascript
    const f6snypi = require('@6degrees/f6snypi');
    ```
2. Get all jokes
    ```javascript
    const jokes =  await f6snypi.jokes().getJokes();
    console.log(jokes)
    ```

## Dependencies
```javascript
    "jest": "^29.5.0", // for testing
    "shx": "^0.3.4", // for cross platform commands
    "typescript": "^5.0.2" // just to be fancy 💅
    "axios": "^0.25.0" // for api calls
```

## Alternative: Using Strapi 5 SDK
We recommend using the official Strapi 5 SDK for your projects instead of this wrapper:

```javascript
import { createClient } from '@strapi/client';

const strapi = createClient({
  url: 'https://api.f6sny.com',
});

// Fetch data using the Strapi SDK
const jokes = await strapi.find('jokes', {
  // Your query parameters here
});
```

## License
The F6sny API is licensed under the MIT License. See the LICENSE file for details.
