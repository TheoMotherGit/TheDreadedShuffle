// /server/server.js
import express from 'express';
import cors from 'cors';
import seatingRoutes from './routes/seatingRoutes.js';  // Import seating routes

const app = express();
const port = 5050;

// CORS middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET',
}));

// Use seating routes
app.use(seatingRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
