const express = require('express');
const app = express();
const router = app.router;

app.get('/', (req,res) => {
    res.send({'hi' : 'there'})
});
app.listen(5000);