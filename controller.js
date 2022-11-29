// Claire Murray

// required modules
const { DateTime } = require('luxon');
const fs = require("fs");

// This string will hold our syncronization timestamp
var synctime = '-1';

// setSyncTime
// This is a POST request that updates the syncronization time
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.setSyncTime = function(req, res) {
   
    var time = DateTime.now().plus({seconds: 30}).toMillis();
    var offset = DateTime.now().set({hour: 0, minute: 0, second: 0}).toMillis(); 
    synctime = String(time - offset);

    try{

        // This is slightly buggy I think? It's fixed on the other branch
        fs.writeFile("../public_html/syncTime.txt", synctime, (err) => {
            if (err) throw err;
            console.log("Completed!");
         });

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

// getSyncTimeFile
// This is a GET request that retrieves the syncronization time
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.getSyncTimeFile = function(req, res) {
    try{
        fs.readFile("syncTime.txt", (err, data) => {
            if (err) throw err;
            res.status(200).send({
                success: true,
                data: data
            })
         });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: "Error occurred reading sync time"
        })

    }
}

// getSyncTimeLocal
// This is a GET request that retrives the syncronization time
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.getSyncTimeLocal = function(req, res) {
    res.status(200).send(synctime);
}