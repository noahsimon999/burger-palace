// Set up mySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password:"1234",
        database: "burgers_db"
    });
};

// Make connection
connection.connect();
module.exports = connection;