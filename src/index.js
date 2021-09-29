const { Console } = require('console');
const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Routes
app.use(require('./routes/index'));

// Listenning the server
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
});
