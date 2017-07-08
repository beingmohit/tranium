# Serverless Boilerplate

[![Build Status](https://travis-ci.org/beingmohit/serverless-boilerplate.svg?branch=master)](https://travis-ci.org/beingmohit/serverless-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/beingmohit/serverless-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/beingmohit/serverless-boilerplate?branch=master) [![Code Climate](https://codeclimate.com/github/beingmohit/serverless-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/beingmohit/serverless-boilerplate) [![Dependency Status](https://david-dm.org/beingmohit/serverless-boilerplate.png)](https://david-dm.org/beingmohit/serverless-boilerplate) [![devDependency Status](https://david-dm.org/beingmohit/serverless-boilerplate/dev-status.png)](https://david-dm.org/beingmohit/serverless-boilerplate#info=devDependencies) [![Analytics](https://ga-beacon.appspot.com/UA-102268283-1/serverless-boilerplate/README)](https://github.com/igrigorik/ga-beacon) [![Known Vulnerabilities](https://snyk.io/test/github/beingmohit/serverless-boilerplate/badge.svg)](https://snyk.io/test/github/beingmohit/serverless-boilerplate) 

##### Stack
- Serverless
- GraphQL-js
- Apollo Client
- React
- CSSModules
- Webpack
- Jest

##### To Do:
- DynamoDB
- Cognito 
- SQS
- SNS
- WebSockets
- Role Based Access Control
- ... What else do you need ? 

## Install & Run

You need to have node 6 or higher installed.

```
npm install -g serverless
npm install -g yarn
yarn
```

Make file `.env.local` & `.env.prod` using `.sample` files provided.

#### Developing
```
npm start
```

#### Deploy 
```
npm run deploy
```

#### Remove

Removes all Functions, Events and Resources from your AWS account.

```
npm run remove
````

#### Testing
```
npm run test
```


