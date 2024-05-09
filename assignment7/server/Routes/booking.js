const express = require('express');
const app = express.Router();

const config = require('config');
const mysql2 = require('mysql2');
const connectionString = {
    host:  config.get("host"),
    port: config.get("sqlport"),
    database: config.get("database"),
    user: config.get("username"),
    password: config.get("password")
};
app.post("/", (req, res) => {
 
    // userId integer,
        var propertyId =req.body.propertyId;
        var total = req.body.total;
        var fromDate = req.body.fromDate;
        var toDate = req.body.toDate;
        
          const connection = mysql2.createConnection(connectionString);
          connection.connect();
          let queryText = `insert into bookings(propertyId,total,fromDate,toDate) values(${propertyId},${total},'${fromDate}', '${toDate}')`;
          connection.query(queryText,(err, result) => {
                res.setHeader("Content-Type", "application/json");
                if(err == null){
                      res.json({status:'success', data:result})
                }
                else{
                      return res.status(401).json({ status: 'error', message: 'data is not found' });   
                }
          });
     })
     app.get("/", (req, res) => {
          const connection = mysql2.createConnection(connectionString);
          connection.connect();
          let queryText =`select * from bookings`;
          connection.query(queryText,(err, result) => {
                res.setHeader("Content-Type", "application/json");
                if(err == null){
                      res.json({status:'success', data:result})
                }
                else{
                      return res.status(401).json({ status: 'error', message: 'data is not found' });   
                }
          });
     })
    
module.exports = app;