import { MongoClient } from 'mongodb';

const placePartners = async () => {

    console.log('PLACING PARTNERS...');
    
    const client = await MongoClient.connect('mongodb://localhost:27017', {maxPoolSize: 2});
    const db = client.db('MotherSeating');    

    const partners = await db.collection('People').find({"department": {"$in": ["Mother Group", "London Partners"]}}).toArray();
    const assistants = await db.collection('People').find({"department": "Assistants"}).toArray();
    
    partners.map(async (partner, index) => {

        const newSeat = {
            bank: null,
            seat: null
        };

        //if bob
        if(partner.first_name === 'Bob' && partner.last_name === 'Saville') {
            
            if(partner.seat) {

                if(partner.seat.bank === 10) {

                    //assign seat on Bank 13
                    newSeat.bank = 13;
                    newSeat.seat = 1;

                } else {

                    //assign seat on Bank 10
                    newSeat.bank = 10;
                    newSeat.seat = 5;                    
                }
            } else {

                //assign seat on Bank 10 by default
                newSeat.bank = 10;
                newSeat.seat = 5;              

            }            
        }

        //if Michael
        if(partner.first_name === 'Michael' && partner.last_name === 'Wall') {
            
            if(partner.seat) {

                if(partner.seat.bank === 10) {

                    //assign seat on Bank 13
                    newSeat.bank = 13;
                    newSeat.seat = 2;

                } else {

                    //assign seat on Bank 10
                    newSeat.bank = 10;
                    newSeat.seat = 4;                    
                }
            } else {

                //assign seat on Bank 10 by default
                newSeat.bank = 10;
                newSeat.seat = 4;              
                       
            }
        }    

        await db.collection('People').updateOne({_id: partner['_id']}, { $set: { seat: newSeat}});        
        await db.collection(`SeatingBank${newSeat.bank}`).updateOne({seat_id: newSeat.seat}, { $set: { occupant: partner['_id']}});        
        
    });

}

export default placePartners;
