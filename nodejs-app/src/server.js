const express = require('express');
const app = express();
const routes = require('./routes');
const database = require('./database');

app.use(express.json());
app.use(express.static('public')); // Serves frontend files
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
