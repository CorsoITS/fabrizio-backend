require('dotenv').config();
const express = require('express');
const { json, urlencoded } = require('body-parser');

const app = express()

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.json({
    messaggio: 'Ingresso delle api backend'
  }).send()
});