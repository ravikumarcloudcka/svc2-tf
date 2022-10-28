const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Zoominfo!!, This is successful response from Service 2 when calling Service 1 for ZI assignment by ravikumar');
});

app.listen(9090, () => console.log('Example app is listening on port 9090.'));
