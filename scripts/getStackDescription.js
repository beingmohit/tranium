'use strict';

var Promise = require('bluebird');
var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');

var describeCFStack = function(stackName) {
    return new Promise(function(resolve, reject) {
        var cloudformation = new AWS.CloudFormation({
            apiVersion: '2010-05-15',
            region: process.env.AWS_REGION
        });

        cloudformation.describeStacks({
            StackName: stackName
        }, function(err, data) {
            if (err) {
                reject(err);
            }

            if (!data || !data.Stacks || data.Stacks.constructor !== Array || data.Stacks.length === 0) {
                reject(new Error("invalid response", data));
            }

            resolve(data.Stacks[0]);
        });
    })
};


if ((!process.env.APP_NAME || !process.env.STAGE || !process.env.AWS_REGION)) {
    throw new Error("Environment not set");
}

var stackName = process.env.APP_NAME + "-" + process.env.STAGE;

return describeCFStack(stackName).then(function(stackDescription) {
    fs.writeFileSync(path.join(__dirname, '../build/output.json'), JSON.stringify(stackDescription))
}).catch(function(err) {
    throw err;
});
