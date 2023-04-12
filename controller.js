// Claire Murray

// required modules
const { DateTime } = require('luxon');
const fs = require("fs");

// This string will hold our syncronization timestamp
var synctime = '-1';
// This string will hold our level index
var lv = '1';

// setSyncTime
// This is a POST request that updates the syncronization time
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.setSyncTime = function(req, res) {
   
    var time = DateTime.now().plus({seconds: 5}).toMillis();
    var offset = DateTime.now().set({hour: 0, minute: 0, second: 0}).toMillis(); 
    synctime = String(time - offset);

    try{
        // fs.writeFile("../public_html/syncTime.txt", synctime, (err) => {
        //     if (err) throw err;
        //     console.log("Completed!");
        //  });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Error occurred updating sync time"
        })
        return
    }
    res.status(200).send({
        success: true,
        message: `Updated sync time to ${synctime}`
    })
}

// setSyncTimeWithOffset
// This is a POST request that updates the syncronization time and tells the
// sequencer to start a given number of seconds into the sequence
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.setSyncTimeWithOffset = function(req, res) {

    // Make sure to send the start timecode in seconds!
    var seconds = req.body.startAt;
    if(!seconds) seconds = '0';
   
    var time = DateTime.now().plus({seconds: 5}).toMillis();
    var offset = DateTime.now().set({hour: 0, minute: 0, second: 0}).toMillis(); 
    synctime = String(time - offset);

    // we will append the timecode to start at on a new line of the file.
    synctime += '\n' + seconds;

    try{
        // I think this was buggy on RIT CS machines, but there sh
        // fs.writeFile("../public_html/syncTime.txt", synctime, (err) => {
        //     if (err) throw err;
        //     console.log("Completed!");
        //  });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Error occurred updating sync time"
        })
        return
    }
    res.status(200).send({
        success: true,
        message: `Updated sync time to ${synctime}`
    })
}

// setLevelSync
// This is a POST request that updates the level index
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.setLevelSync = function(req, res) {
   
    lv = req.body.level;

    try{
        // fs.writeFile("../public_html/level.txt", lv , (err) => {
        //     if (err) throw err;
        //     console.log("Completed!");
        //  });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Error occurred updating level"
        })
        return
    }
    res.status(200).send({
        success: true,
        message: `Set to synchronize to level ${lv}`
    })
}

// clearSyncTime
// This is a POST request that resets the syncronization time
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.clearSyncTime = function(req, res) {

    synctime = '-1'

    try{
        fs.writeFile("../public_html/syncTime.txt", '-1', (err) => {
            if (err) throw err;
            console.log("Completed!");
         });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Error occurred updating sync time"
        })
    }
    res.status(200).send({
        success: true,
        message: `Cleared sync time`
    })
}


// getSyncTimeLocal
// This is a GET request that retrives the syncronization time
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.getSyncTimeLocal = function(req, res) {
    res.status(200).send(synctime);
}

// getLevelLocal
// This is a GET request that retrives the level index
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.getLevelLocal = function(req, res) {
    res.status(200).send(lv);
}