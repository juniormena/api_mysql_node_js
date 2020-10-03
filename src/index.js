const express = require('express');
const app = express();


//settings
app.set('port',process.env.PORT || 3000);
//middleware
app.use(express.json());
//Routes
app.use(require('./routes/employees'));

app.listen(app.get('port'),()=>console.log(`server running on ${app.get('port')}`));