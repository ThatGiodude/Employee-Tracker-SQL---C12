const mysql = require('mysql2');
const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "employees_db",
    });

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Database connected successfully.");
    });

    module.exports = connection;