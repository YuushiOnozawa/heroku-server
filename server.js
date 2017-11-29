const express = require('express');
const app = express();
const serveStatic = require('serve-static');

app.set('port', process.env.PORT || 3000);
app.use(serveStatic(`${__dirname}/dest`));

app.listen(app.get('port'), () => {
  console.log(`listening:${app.get('port')}`);
});