const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    //limpar registros da tabela
    sql = "DELETE FROM people";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table cleaned");
    });

    sql = "INSERT INTO people(name) values ('Pessoa 1')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    sql = "INSERT INTO people(name) values ('Pessoa 2')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    sql = "INSERT INTO people(name) values ('Pessoa 3')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    sql = "INSERT INTO people(name) values ('Pessoa 4')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    sql = "INSERT INTO people(name) values ('Pessoa 5')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });    

    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;

        app.get('/', (req,res) => {
            res.write('<h1>Full Cycle Rocks!</h1>'); 
            res.write('<br/>');   
            res.write('<h2>People list:</h2>');

            result.forEach(element => {
              res.write('<p>' + element.name + '</p>');
            });
           
            res.end();                   
        })

        console.log(result);
    });

  });

app.listen(port, ()=> {
    console.log('Rodando na porta '+ port)
})