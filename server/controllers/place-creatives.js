import { MongoClient } from 'mongodb';
import shuffleArray from './utils/shuffle.js';
import CONSTANTS from './utils/constants.js';

const placeCreatives = async () => {
  console.log('PLACING CREATIVES...');

  let client;
  try {
    // Log database connection
    console.log('Connecting to MongoDB...');
    client = await MongoClient.connect('mongodb://localhost:27017', { maxPoolSize: 2 });
    const db = client.db('MotherSeating');
    console.log('Connected to MongoDB');

    // Fetch and shuffle creatives
    const creatives = shuffleArray(
      await db.collection('People').find({ department: 'Creative' }).toArray()
    );

    // Log if creatives are fetched
    if (creatives.length === 0) {
      console.warn('No creatives found in the database');
      return;
    } else {
      console.log(`Fetched ${creatives.length} creatives`);
    }

    let personSeated = []; // Track seated individuals

    // Start seating creatives
    for (const partner of creatives) {
      if (personSeated.includes(partner._id)) {
        continue; // Skip if already seated
      }

      let seated = false;

      // Try finding a seat in a random bank
      for (let attempt = 0; attempt < CONSTANTS.NUMBER_OF_BANKS; attempt++) {
        const bankNumber = Math.floor(Math.random() * CONSTANTS.NUMBER_OF_BANKS) + 1;
        const bankCollection = `SeatingBank${bankNumber}`;

        console.log(`Checking Bank ${bankNumber} for available seat...`);

        // Find an available seat in the bank
        const availableSeat = await db.collection(bankCollection).findOne({ occupant: null });

        // Log if a seat is available or not
        if (availableSeat) {
          console.log(`Found available seat in Bank ${bankNumber}, Seat ID ${availableSeat.seat_id}`);

          const newSeat = {
            seatingBank: bankNumber,   // Specify the bank number
            seat_id: availableSeat.seat_id, // Specify the seat ID
          };

          // Update the person with their seat info
          await db.collection('People').updateOne(
            { _id: partner._id },
            { 
              $set: { 
                seat: newSeat  // Assign the seat field with new seat info
              }
            }
          );

          // Mark the seat as occupied
          await db.collection(bankCollection).updateOne(
            { seat_id: newSeat.seat_id },  // Find the specific seat by seat_id
            { $set: { occupant: partner._id } }  // Set the occupant to the partner's ID
          );

          console.log(`Seated ${partner.first_name} ${partner.last_name} in Bank ${bankNumber}, Seat ${newSeat.seat_id}`);
          personSeated.push(partner._id);
          seated = true;
          break;
        } else {
          console.log(`No available seat found in Bank ${bankNumber}`);
        }
      }

      if (!seated) {
        console.warn(`No available seat found for ${partner.first_name} ${partner.last_name}`);
      }
    }

    console.log('All creatives have been seated.');
  } catch (error) {
    console.error('Error placing creatives:', error);
  } finally {
    if (client) {
      client.close();
    }
  }
};

export default placeCreatives;
