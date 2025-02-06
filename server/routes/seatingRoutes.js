// /server/routes/seatingRoutes.js

import express from 'express';
import placeCreatives from '../controllers/placeCreatives.js'; // Import the function to place creatives

const router = express.Router();

// Endpoint to trigger placing creatives
router.get('/place-creatives', async (req, res) => {
    try {
        await placeCreatives();  // Run the seating logic
        res.send('Creatives placed successfully!');
    } catch (error) {
        res.status(500).send('Error placing creatives');
    }
});

// Endpoint to get seated creatives
router.get('/api/creatives', async (req, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db('MotherSeating');
        const creatives = await db.collection('People').find({ "seat": { $exists: true } }).toArray();
        res.json(creatives);  // Send creatives data back as JSON
    } catch (error) {
        res.status(500).send('Error fetching creatives');
    }
});

export default router;
