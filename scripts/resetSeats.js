import { MongoClient } from 'mongodb';

import CONSTATNTS from './utils/constants.js';

const resetSeats = async () => {

    console.log('Resetting Seats...');

    const client = await MongoClient.connect('mongodb://localhost:27017', {maxPoolSize: 2});
    const db = client.db('MotherSeating');    


    for(let i = 1; i <= CONSTATNTS.NUMBER_OF_BANKS; i++) {
        await db.collection(`SeatingBank${i}`).updateMany({}, { $set: { occupant: null}}); 
    }

    await db.collection(`People`).updateMany({}, { $set: { seat: null}}); 
    
}

export default resetSeats;
