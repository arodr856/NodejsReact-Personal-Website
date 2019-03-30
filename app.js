const express = require('express');
const path = require('path');
const app = express();
// routes
const githubRoutes = require('./routes/github');

const env = process.env.NODE_ENV || 'dev';
if(env === 'production'){
    console.log(env);
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

app.use('/api/github', githubRoutes);

const PORT = process.env.PORT || '5000';
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});