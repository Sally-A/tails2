const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.all('/reviews', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/reviews', (req, res) => {
    res.end('Will send all the reviews to you');
});

app.post('/reviews', (req, res) => {
    res.end(`Will add the reviews: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/reviews', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /reviews');
});

app.delete('/reviews', (req, res) => {
    res.end('Deleting all reviews');
});

app.get('/reviews/:userId', (req, res) => {
    res.end(`Will send details of the reviews: ${req.params.userId} to you`);
});

app.post('/reviews/:userId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /reviews/${req.params.userId}`);
});

app.put('/reviews/:userId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.userId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/reviews/:userId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.userId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});