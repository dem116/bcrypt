const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');

const app = express();
const PORT = 3000;




app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
    });