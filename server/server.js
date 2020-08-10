const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // Please write a valid ATLAS_URI in .env file
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const boardsRouter = require('./routes/boards');
const schoolsRouter = require('./routes/schools');
const lessonsRouter = require('./routes/lessons');
// const analyticsRouter = require('./routes/users');

app.use('/boards', boardsRouter);
app.use('/schools', schoolsRouter);
app.use('/lessons', lessonsRouter);

// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server in running on port: ${port}`);
});