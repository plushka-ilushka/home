## Start guide
Before you can build this project, you need to perform following actions:
1. Install and configure project's dependencies
    
2. Install all [npm](https://www.npmjs.com/) dependencies
    
    ```bash
    npm install
    ```
    You will need to run this command every time dependencies are changed in package.json.

### Prepare environment

The development environment is dockerized.

First you need to run command below to build all required docker images

```bash
npm run env:buildServer
npm run env:buildDocker
```

Then, run next command to "up" containers based on just built images:

```bash
npm run env:up
```

You will need to run one this commands every time one of the environment's components are changed

#### Running development
To run development execute next commands:

* run docker
    ```bash
    npm run env:start
    ```
    
* run webpack
    ```bash
    npm start
    ```

### Testing
```bash
npm test
```

To run tests in "watch" mode - run:
```bush
npm run test:watch
```
