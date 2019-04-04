#!/usr/bin/env node

const blowson = require('blowson');
const axios = require('axios');

const [, , ...args] = process.argv;

if (args.length < 1) {
    console.log('Source argument is missing!');
    process.exit();
}

const src = './' + args[0];
const data = require(src);
let parsedData = '';

console.log('Extending sample data ...');

try {
    parsedData = blowson(data);
} catch (error) {
    console.error(error);
}

if (typeof parsedData !== 'object') {
    console.log('Extending sample data failed. Are you sure the JSON is formatted correctly?');
    process.exit();
} else {
    console.log('Deploying extended data ...');
    axios.post('https://fakeql.com/api/deploy.js', parsedData)
        .then(function (response) {
            console.log('');
            console.log('Your fake GraphQL API is ready: https://fakeql.com/graphql/' + response.data.hash);
            process.exit();
        })
        .catch(function (error) {
            console.log('');
            console.log('Deployment failed, please try again.');
            process.exit();
        });
}