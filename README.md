# 715ARCueNodeServer

## How to Run:

* These instructions specific to RIT CS machines. To run locally, please see main branch.

1. Clone the project, navigate to the directory you cloned to

2. To start the project, run the command `node app.js`. You should see a confirmation message in the console.

## Testing

You can use any HTTP client to test. I prefer [Postman](https://www.postman.com/). 

The target URL should be `[ritUsername]@[hostname].cs.rit.edu:3000/`

## Current Active requests:

| Method | URL   | Effect                                     |
|--------|-------|--------------------------------------------|
| POST   | /     | Sets Sync Time to local variable and file  |
| POST   | /     | Resets Sync Time to -1                     |
| GET    | /     | Reads Sync Time from local variable        |
| GET    | /file | Reads Sync Time from the file syncTime.txt |
