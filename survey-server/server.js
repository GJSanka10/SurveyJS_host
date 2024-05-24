const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let surveyResponses = [];

// POST route to handle survey responses
app.post('/api/survey-responses', (req, res) => {
    const response = req.body;
    surveyResponses.push(response);
    console.log('Received survey response:', response);
    res.json({ status: 'success', data: response });
});

// GET route to handle GET requests for the /api/survey-responses endpoint
app.get('/api/survey-responses', (req, res) => {
    // Handle GET requests (if needed)
    res.status(404).send('Not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
