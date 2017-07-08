# Serverless Boilerplate

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


