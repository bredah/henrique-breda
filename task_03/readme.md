# API Playground

<!-- TOC -->

- [Precondition](#precondition)
- [Setup](#setup)
- [Execution](#execution)
- [Scenario](#scenario)
- [Error(s)](#errors)

<!-- /TOC -->

## Precondition

Clone the project [api-playground](https://github.com/bestbuy/api-playground/), install the project dependencies and run the application:

```bash
git clone https://github.com/bestbuy/api-playground/
cd api-playground
npm install
npm start
```

> Use the node version 8.15.1, this version doesn't show any problems during the installation.

## Setup

Install the project dependencies:

```bash
npm install
```

## Execution

```bash
# default test step
npm test
# call the script step
npm run test
```

## Scenario

- Health Check

| endpoint     | method | scenario | status |
| ------------ | ------ | -------- | ------ |
| /healthcheck | get    | Ping     | Passed |

- Product

| endpoint       | method | scenario          | status |
| -------------- | ------ | ----------------- | ------ |
| /products      | get    | All values        | Passed |
| /products      | get    | Set the limit     | Passed |
| /products      | get    | Invalid limit     | Passed |
| /products      | get    | Skip values       | Passed |
| /products      | post   | Add a product     | Passed |
| /products      | post   | Without name      | Passed |
| /products      | post   | Without price     | Failed |
| /products/{id} | delete | Remove a product  | Passed |
| /products/{id} | delete | Without parameter | Failed |

## Error(s)

- The endpoint accept to post a product without the price field

| endpoint  | method | scenario      | status |
| --------- | ------ | ------------- | ------ |
| /products | post   | Without price | Failed |

Request body:

```json
{
  name: "string",
  type: "string",
  shipping: 0,
  upc: "string",
  description: "string",
  manufacturer: "string",
  model: "string",
  url: "string",
  image: "string"
}
```

- Do not pass a parameter when a delete method is executed

| endpoint       | method | scenario          | status |
| -------------- | ------ | ----------------- | ------ |
| /products/{id} | delete | Without parameter | Failed |

URL used:

```url
/products/
```