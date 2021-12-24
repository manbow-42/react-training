const express  = require('express');
const app      = express();
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI', options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3001;

const router = require('./routes/v1/');
app.use('/api/v1/', router);

app.listen(port);
console.log('listen on port' + port);