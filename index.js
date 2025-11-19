import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

app.post('/status-callback', (req, res) => {
    const statusData = req.body;
    console.log('Received status callback:', statusData);
    res.status(200).send('Status callback received');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;