# 715ARCueNodeServer

## Implementation Details:
This project uses the following techstack
- Language: JavaScript
- Node.js and NPM
- Express JS

## How to Run:

* Make sure you have [Node](https://nodejs.org/en/download/) and [Nodemon](https://www.npmjs.com/package/nodemon) on your machine

1. Clone the project

2. From the project directory, run the command `npm install`. This should automatically install all required modules.

3. To start the project, run the command `nodemon`. You should see a confirmation message in the console.

## Testing

You can use any HTTP client to test. I prefer [Postman](https://www.postman.com/). 

The target URL, if running the project locally, should be `[Your IP Address]:3000/`

## Current Active requests:

| Method | URL   | Effect                                     |
|--------|-------|--------------------------------------------|
| POST   | /     | Sets Sync Time to local variable and file  |
| GET    | /     | Reads Sync Time from local variable        |
| GET    | /file | Reads Sync Time from the file syncTime.txt |  

Note: *( GET /file is currently buggy, but you can still access the file directly.)*
