# Tranium

[![Build Status](https://travis-ci.org/beingmohit/tranium.svg?branch=master)](https://travis-ci.org/beingmohit/tranium) [![Coverage Status](https://coveralls.io/repos/github/beingmohit/tranium/badge.svg?branch=master)](https://coveralls.io/github/beingmohit/tranium?branch=master) [![Code Climate](https://codeclimate.com/github/beingmohit/tranium/badges/gpa.svg)](https://codeclimate.com/github/beingmohit/tranium) [![Dependency Status](https://david-dm.org/beingmohit/tranium.png)](https://david-dm.org/beingmohit/tranium) [![devDependency Status](https://david-dm.org/beingmohit/tranium/dev-status.png)](https://david-dm.org/beingmohit/tranium#info=devDependencies) [![Analytics](https://ga-beacon.appspot.com/UA-102268283-1/tranium/README)](https://github.com/igrigorik/ga-beacon) [![Known Vulnerabilities](https://snyk.io/test/github/beingmohit/tranium/badge.svg)](https://snyk.io/test/github/beingmohit/tranium) 

Goal of Tranium is to provide the perfect starting point for a auto-scaling, event based web application running on cutting edge technologies. 

##### Stack
- [x] Serverless
- [x] GraphQL
- [x] React
- [x] Webpack
- [x] Jest
- [ ] DynamoDB
- [ ] AWS Cognito 
- [ ] AWS SQS
- [ ] AWS SNS
- [ ] WebSockets


##### Features
- [ ] Authentication
- [ ] Access Control
- [ ] Notifications & Announcements
- [ ] Themeable UI Components 

## Install & Run

You need to have node 6 or higher installed.

```
npm install -g serverless
npm install -g yarn
yarn
```

Add configuration to file `.env` (See `.env.sample`)

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


