const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const handleErrors = require('./middleware/handleErrors');
const { NotFound } = require('./utils/errors');
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', routes);
//404 error handling
app.use((req, res, next) => {
  next(new NotFound())
});
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Server starting`);
});
