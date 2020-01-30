"use strict";

const express = require('express');
const app = express();
const path = require('path');
const PORT = coalesce(process.env.PORT, 3000);

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./pages/index.html'));
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

function coalesce() {

    function __is_null(val) {
        if(val == null)
            return true;
        else 
            return false;
    }

    for(var i = 0; i < arguments.length; i++){
        if(!__is_null(arguments[i]))
            return arguments[i];
    }
    
    if (typeof arguments[0] == "number")
        return 0;
    else
        return '';
}