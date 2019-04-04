# FakeQL-CLI

CLI to extend and deploy a fake GraphQL API.

The fastest way to deploy a fake GraphQL API. Powered by [FakeQL](https//fakeql.com/)!

## Installation:

```
$ npm install -g fakeql-cli
```

## Usage:

Prepare a minimal sample data JSON according to the [Blowson](https://www.blowson.com/docs/) docs. Than:

```
$ fakeql-cli sample-data.json
```

You will get a GraphQL API endpoint back that you can freely use till the free limits are used up.

In a later update, you'll be able to authenticate with your FakeQL user account to extend your quotas.