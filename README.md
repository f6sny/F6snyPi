# F6snyPI

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

## Feature request

I will be glad ♥ (for the time-being) to add the feature you are missing, just open an issue.

## Contributing

We welcome contributions from the community! To contribute to the this repo, follow these steps:

1. Fork the repository
2. Create a new branch for your changes: git checkout -b my-feature-branch
3. Make your changes and commit them: git commit -am "Add new feature"
4. Push your changes to your fork: git push origin my-feature-branch
5. Create a pull request against the main branch of the `6degrees/f6snypi` repository

## License

The F6sny API is licensed under the MIT License. See the LICENSE file for details.
Unleash the devils احرق السفن
