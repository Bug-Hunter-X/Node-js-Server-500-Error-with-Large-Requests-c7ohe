# Node.js Server 500 Error with Large Requests

This repository demonstrates a common error in Node.js servers where large incoming requests cause a 500 Internal Server Error.  The issue stems from exceeding the default request body size limit in Node.js's HTTP module. This example shows the problem and its solution.

## Problem

The `server.js` file contains a basic Node.js HTTP server. When you send a large request to this server (e.g., a POST request with a large JSON payload), the server will return a 500 error.

## Solution

The `serverSolution.js` file demonstrates how to fix the issue using the `body-parser` middleware. This middleware parses incoming request bodies and handles large requests without triggering the 500 error.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node server.js`.
5. Send a large POST request to `http://localhost:8080` using a tool like Postman or curl.

You should receive a 500 error with the original server. After modifying to use `serverSolution.js` the error should be resolved.

## Technologies Used

* Node.js
* body-parser (for the solution)