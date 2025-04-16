const mysql = require("mysql2");

 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dharani@2323',
    database: 'tridots'
});

db.connect(err =>{
    if(err){
        console.log("database connection fail")
    }
    else{
        console.log('database conntected sucessfully')
    }
});

module.exports = db;

