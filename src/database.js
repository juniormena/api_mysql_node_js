const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'prueba'
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    else{
        console.log('Database connected')
    }
});

module.exports = mysqlConnection;