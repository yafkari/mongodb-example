const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/TodoItemModel')

const app = express();

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mongodb-demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

app.use(bodyParser.json());

require('./routes/todoItemRoutes')(app);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));