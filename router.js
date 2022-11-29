//Claire Murray

//required modules
const express = require('express');
const router = express.Router();

//local modules
const functions = require('./controller')

// POST [url]/
if (functions.setSyncTime) {
    router.post('/', functions.setSyncTime)
}

// POST [url]/clear
if (functions.clearSyncTime) {
    router.post('/clear', functions.clearSyncTime)
}

// GET [url]/file
if (functions.getSyncTimeFile) {
    router.get('/file', functions.getSyncTimeFile)
}

// GET [url]/
if (functions.getSyncTimeLocal) {
    router.get('/', functions.getSyncTimeLocal)
}

module.exports = router;