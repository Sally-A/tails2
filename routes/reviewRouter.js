const express = require('express');
const bodyParser = require('body-parser');

const reviewRouter = express.Router();


reviewRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the reviews to you');
})
.post((req, res) => {
    res.end(`Will add the review: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /reviews');
})
.delete((req, res) => {
    res.end('Deleting all reviews');
});

reviewRouter.route('/:userId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the review: ${req.params.userId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /reviews/${req.params.userId}`);
})
.put((req, res) => {
    res.write(`Updating the review: ${req.params.userId}\n`);
    res.end(`Will update the review: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting review: ${req.params.userId}`);
});

module.exports = reviewRouter;