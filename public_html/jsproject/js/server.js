var express = require('express');
var app = express();
const PORT =8081;
//William Chalifoux

app.get('/getBusData', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let dataToSend = `<div class="event">
      <img src="img/map-ca.png" alt="Map of California" />
      <p><b>San Francisco, CA</b><br>
      May 1</p>
    </div>
    <div class="event">
      <img src="img/map-tx.png" alt="Map of Texas" />
      <p><b>Austin, TX</b><br>
      May 15</p>
    </div>
    <div class="event">
      <img src="img/map-ny.png" alt="Map of New York" />
      <p><b>New York, NY</b><br>
      May 30</p>
    </div>`;
    res.send( dataToSend );
    return;
});

var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
 console.log(`Server running at http://127.0.0.1:${PORT}/`);
