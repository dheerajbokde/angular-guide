const express = require('express');

const app = express();

app.use(express.static('./dist/angular-guide'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-guide/'}),
);

app.listen(process.env.PORT || 8080);