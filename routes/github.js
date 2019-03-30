const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('../config/config.json');

router.get('/repos', (req, res) => {
    fetch(config.github.repos_url)
        .then(response => response.json())
        .then(json => {
            const github_data = json.map(({name, language, html_url}) => {
                return {name, language, html_url};
            });
            res.json(github_data);
        })
        .catch(err => console.log(err));
});

module.exports = router;