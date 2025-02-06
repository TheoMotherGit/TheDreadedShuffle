import resetSeats from "./resetSeats.js";
import placePartners from "./place-partners.js";
import placeCreatives from "./place-creatives.js";

const main = async () => {

    await resetSeats();

 //   await placePartners();

    await placeCreatives();

   //process.exit();
}

main();

