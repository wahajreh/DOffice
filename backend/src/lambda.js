// lambda.js
require('source-map-support/register')
const serverlessExpress = require('@vendia/serverless-express')
const app = require('./server')
exports.handler = serverlessExpress({ app })