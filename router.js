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

// POST [url]/startAt
if (functions.setSyncTimeWithOffset) {
    router.post('/startAt', functions.setSyncTimeWithOffset)
}

// POST [url]/
if (functions.setLevelSync) {
    router.post('/level', functions.setLevelSync)
}

// POST [url]/clear
if (functions.clearSyncTime) {
    router.post('/clear', functions.clearSyncTime)
}

// GET [url]/
if (functions.getSyncTimeLocal) {
    router.get('/', functions.getSyncTimeLocal)
}

// GET [url]/level
if (functions.getLevelLocal) {
    router.get('/level', functions.getLevelLocal)
}



module.exports = router;