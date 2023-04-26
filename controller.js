// Claire Murray

// required modules
const { DateTime } = require('luxon');
const fs = require("fs");

// This string will hold our syncronization timestamp
var synctime = '-1';
// This string will hold our level index
var lv = '1';

// setSyncTime
// This is a POST request that updates the syncronization time, level index, 
// @param: req - HTTP Request object
// @param: res - HTTP Response object
module.exports.setSyncTime = function(req, res) {
   
    var time = DateTime.now().plus({seconds: 5}).toMillis();
    var offset = DateTime.now().set({hour: 0, minute: 0, second: 0}).toMillis(); 
    synctime = String(time - offset);

    // Data from HTTP request object
    const flag = req.body.flag;
    const device_id = req.body.device_id;
    const level = req.body.level;
    const level_start_time = req.body.level_start_time;

    lv = level;

    var file_text = flag + "," + device_id + "," + synctime + "," + level + "," + level_start_time;

    try{
        fs.writeFile("../public_html/syncTime.txt", file_text, (err) => {
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

    synctime = '-1';

    try{
        fs.writeFile("../public_html/syncTime.txt", '-1,-1,-1,-1,0:00', (err) => {
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