import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const ODDS_API_KEY = process.env.ODDS_API_KEY; // Replace with your actual Odds API key
const ODDS_API_URL = `https://api.the-odds-api.com/v4/sports/basketball_wncaab/scores/?daysFrom=1&apiKey=${ODDS_API_KEY}`;

//endpoint
app.get('/hello', (req, res) => {
    res.send("Hello");
});

app.get('/scores', async (req, res) => {
    //make api call? 
    try {
        const response = await fetch(ODDS_API_URL);
        if (!response.ok) throw new Error('Failed to fetch scores');
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching live scores:', error);
        res.status(500).json({ error: 'Failed to fetch live scores' });
    }

});

app.listen(8000, () => {
    console.log("Server is listening on port 8000")
});
