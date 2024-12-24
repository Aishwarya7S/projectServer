const express = require('express');
const router = express.Router();
const DemoController = require('../Controller/DemoController');

// Create item
router.post('/createDemo', DemoController.createDemo); // Adjusted path to include 'createDemo'

// Get all demos
router.get('/getDemos', DemoController.getDemos); // Adjusted path to include 'getDemos'

// Update demo
router.put('/updateDemo/:id', DemoController.updateDemo); // Adjusted path to include 'updateDemo'

// Delete demo
router.delete('/deleteDemo/:id', DemoController.deleteDemo); // Adjusted path to include 'deleteDemo'

module.exports = router;
