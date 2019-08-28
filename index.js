const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const dictReqQuery = req.query
    const dictReqHeader = req.headers
    console.log("------------------")
    console.log(dictReqQuery)
    console.log(dictReqHeader)
    console.log("------------------")
    if(dictReqQuery.node_mac !== undefined)
        res.send('QUERY RECIBIDO DONDE EL MAC ES: ' + dictReqQuery.node_mac);
    else    
        res.send('NO SE RECIBIO QUERY');
});

app.listen(8080, function () {
    console.log('CIMA IN PORT 8080');
});
