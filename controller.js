const { DateTime } = require('luxon');
const fs = require("fs");

var synctime = '';

module.exports.setSyncTime = function(req, res) {
   
    var time = DateTime.now().plus({seconds: 30}).toUnixInteger();
    var offset = DateTime.now().set({hour: 0, minute: 0, second: 0}).toUnixInteger(); 
    synctime = String(time - offset);

    try{
        fs.writeFile("../public_html/syncTime.txt", time, (err) => {
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

module.exports.getSyncTimeLocal = function(req, res) {
    res.status(200).send({
        success: true,
        data: synctime
    })
}