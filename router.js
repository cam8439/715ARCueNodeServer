const express = require('express');
const router = express.Router();

const functions = require('./controller')

if (functions.setSyncTime) {
    router.post('/', functions.setSyncTime)
}

if (functions.clearSyncTime) {
    router.post('/clear', functions.clearSyncTime)
}

if (functions.getSyncTimeFile) {
    router.get('/file', functions.getSyncTimeFile)
}

if (functions.getSyncTimeLocal) {
    router.get('/', functions.getSyncTimeLocal)
}

module.exports = router;