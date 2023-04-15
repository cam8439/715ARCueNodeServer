# 715ARCueNodeServer

## How to Run:

* These instructions specific to RIT CS machines. To run locally, please see main branch.

1. Clone the project, navigate to the directory you cloned to

2. To start the project, run the command `node app.js`. You should see a confirmation message in the console.

## Testing

You can use any HTTP client to test. I prefer [Postman](https://www.postman.com/). 

The target URL should be `[ritUsername]@[hostname].cs.rit.edu:3000/`

## Sync File Format
The synchronization file is posted to https://www.cs.rit.edu/~cam8439/syncTime.txt

The data in the file will be formatted as follows:

`[flag: int], [device id: int], [Sync Time: string], [level index: int], [level start time: string]`

* Where Sync Time is formatted as a Unix timestamp as miliseconds since the prior midnight, and Level Start Time is formatted as minutes:seconds.

* Flag will be an int, either 1, 2, or 3. A 1 indicates that we wish to play the entire 18 minute sequence from the beginning. A 2 or a 3 indicates we want to restart the sequence of the currently loaded level. Any other value will do nothing.

* Device id (Currently unimplemented) will indicate which device(s) we want to cue.

* Level index will be a positive integer <= 6

## Current Active requests:

| Method | URL      | Effect                                              |
|--------|----------|-----------------------------------------------------|
| POST   | /        | Sets Sync Data to local variable and file           |
| POST   | /clear   | Resets Sync Time to -1                              |
| GET    | /        | Reads Sync Time from local variable                 |
| GET    | /level   | Reads Level Index from local variable               |
