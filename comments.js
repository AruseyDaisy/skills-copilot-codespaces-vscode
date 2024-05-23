// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Get comments from file
function getComments() {
    return JSON.parse(fs.readFileSync('comments.json'));
}

// Save comments to file
function saveComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments));
}

// Get comments from file
app.get('/', (req, res) => {
    const comments = getComments();
    res.render('comments', { comments: comments });
});

// Add a new comment
app.post('/', (req, res) => {
    const name = req.body.name;
    const comment = req.body.comment;
    const comments = getComments();
    comments.push({ name: name, comment: comment });
    saveComments(comments);
    res.redirect('/');
});

// Start server
app.listen(3000, () => {
    console.log('Server started');
});