const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const bookingRoutes = require('./Routes/booking');


app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); 
const cors = require("cors");
app.use(cors());

const config = require('config');
const PORT = config.get("portno");
const encryptionKey = config.get("encryptionKey");

// const connectionString = {
//       host:"localhost",
//       port: 3306,
//       database: "airbnb_db",
//       user:"sumana",
//       password:"root"
//   };
const connectionString = {
      host:  config.get("host"),
      port: config.get("sqlport"),
      database: config.get("database"),
      user: config.get("username"),
      password: config.get("password")
  };
// user registration
app.get("/users/registration", (req, res) =>{
      const connection = mysql2.createConnection(connectionString);
      connection.connect();

      let queryText = `select * from user`;
      connection.query(queryText, (err,result)=> {
            console.log(result,"25 =======")
           
           res.setHeader("Content-Type", "application/json");
           if(err == null){

            res.write(JSON.stringify(result));
            connection.end();
            res.end();
         }else{
            res.write(JSON.stringify(err));
            connection.end();
            res.end();
         }
      })

} )

app.post("/users/registration", (req, res) => {
     console.log(req.body, "43 =================");
      var firstName = req.body.firstName;
      var lastName = req.body.lastName;
      var email = req.body.email;
      var password = req.body.password;
      var phoneNumber = req.body.phoneNumber;

      const connection = mysql2.createConnection(connectionString);
      connection.connect();
     
      let queryText = `insert into user(firstName,lastName,email,password,phoneNumber) values('${firstName}', '${lastName}','${email}', '${password}', '${phoneNumber}')`;
    

       console.log(queryText);

       connection.query(queryText, (err, result) => {
            res.setHeader("Content-Type", "application/json");
            if(err == null){

                  res.write(JSON.stringify(result));
                  connection.end();
                  res.end();
               }else{
                  res.write(JSON.stringify(err));
                  connection.end();
                  res.end();
               }
       })

})

//login
app.post("/users/login", (req,res) => {
     
//      const { email, password } = req.body;
     var email1 = req.body.email;
     var password1 = req.body.password;
     console.log(email1,password1,"89 ======")
      const connection = mysql2.createConnection(connectionString);

      let queryText = `Select * from user where email = '${email1}' AND password = '${password1}'`;
      connection.query(queryText, (err, result) => {
            console.log(result[0].firstName, "id =",result[0].id, "98 ======")
            res.setHeader("Content-Type", "application/json");
            if(err == null){

                  console.log("101==========",encryptionKey);


                  const token = jwt.sign({ id: result[0].id, name: result[0].firstName }, encryptionKey);
                  console.log(token, "104 ========")
                  res.json({ status: 'success', data: { token, name: result[0].firstName  } });
                  // res.write(JSON.stringify(result));
                  // connection.end();
                  // res.end();
               }else{
                  return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
                  // res.write(JSON.stringify(err));
                  // connection.end();
                  // res.end();
               }
      })

});
app.get("/users/profile/:firstName", (req,res) => {
      var firstName = req.params.firstName;
      console.log(firstName, " 120 ===")
      
       const connection = mysql2.createConnection(connectionString);
       connection.connect();
        console.log(firstName, "124 ========");
       let queryText = `SELECT firstName, lastName,email,phoneNumber FROM user where firstName = '${firstName}'`;
       console.log(queryText)
       connection.query(queryText, (err, result) =>{
            if(err == null){

            console.log(result, "129 ===");
          
              res.json({ status: 'success', data:  result });
              connection.end();
              
            }
            else{
                   res.write(JSON.stringify(err));
                  connection.end();
                  res.end();
            }
       });

})

app.put("/users/profile/:firstName", (req,res) => {
      var firstName = req.params.firstName;
      var firstName1 = req.body.firstName;
      var lastName = req.body.lastName;
      var phoneNumber = req.body.phoneNumber;

       const connection = mysql2.createConnection(connectionString);
       connection.connect();
        console.log(firstName);
       let queryText = `update user set firstName = '${firstName1}',
                                        lastName = '${lastName}', 
                                        phoneNumber = '${phoneNumber}'
                                        where firstName = '${firstName}'`;
       console.log(queryText)
       connection.query(queryText, (err, result) =>{
            if(err == null){
            console.log(result);
            const token = jwt.sign({ id: result.id, name: result.firstName }, encryptionKey);
            console.log(token)
            
            let check = jwt.verify(token, encryptionKey);
            // console.log(check.iat, "167 ======");
           
              res.json({ status: 'success', data:  result });
              connection.end();
              
            }
            else{
                   res.write(JSON.stringify(err));
                  connection.end();
                  res.end();
            }
       });

})


app.post("/property", (req, res) => {
      console.log(req.body, "185 =================");
      var categoryId  = req.body.categoryId
      console.log(categoryId,"187======");
      var title = req.body.title;
      var details = req.body.details;
       var address = req.body.address;
      var contactNo = req.body.contactNo;
      var ownerName = req.body.ownerName;
      var  isLakeView = req.body.isLakeView;
      var isTV = req.body.isTV;
      var isAC = req.body.isAC;
      var isWifi = req.body.isWifi;
      // isMiniBar integer(1) default 0,
      var isBreakfast = req.body.isBreakfast;
      var isParking = req.body.isParking;
      var guests = req.body.guests; 
      var bedrooms =req.body.bedrooms;
      var beds =req.body.beds;
       var bathrooms = req.body.bathrooms;
      var rent = req.body.rent;
 
       const connection = mysql2.createConnection(connectionString);
       connection.connect();
      
       let queryText = `insert into property(categoryId,title,details,address,contactNo,ownerName,isLakeView,isTV,isAC,isWifi,isBreakfast,isParking,guests,bedrooms,beds,bathrooms,rent) 
       values(${categoryId}, '${title}','${details}', '${address}', '${contactNo}','${ownerName}',${isLakeView},${isTV},${isAC},${isWifi},${isBreakfast},${isParking},${guests},${bedrooms},${beds},${bathrooms},${rent})`;
     
 
        console.log(queryText);
 
        connection.query(queryText, (err, result) => {
             res.setHeader("Content-Type", "application/json");
             if(err == null){
                  // res.json({ status: 'success', data:  result });
                    res.json({status:'success', data:result})
                  //  res.write(JSON.stringify(result));
                  //  connection.end();
                  //  res.end();
                }else{
                   res.write(JSON.stringify(err));
                   connection.end();
                   res.end();
                }
        })
 
 })
 app.get("/property", (req, res) => {
      const connection = mysql2.createConnection(connectionString);
      connection.connect();
      let queryText =`select id,title,details,rent,profileImage from property`;
      connection.query(queryText,(err, result) => {
            if(err == null){
                  res.json({status:'success', data:result})
            }
            else{
                  return res.status(401).json({ status: 'error', message: 'data is not found' });   
            }
      });
 })

 app.use("/booking", bookingRoutes);
 //booking
//  app.post("/booking", (req, res) => {
 
// // userId integer,
//     var propertyId =req.body.propertyId;
//     var total = req.body.total;
//     var fromDate = req.body.fromDate;
//     var toDate = req.body.toDate;
    
//       const connection = mysql2.createConnection(connectionString);
//       connection.connect();
//       let queryText = `insert into bookings(propertyId,total,fromDate,toDate) values(${propertyId},${total},'${fromDate}', '${toDate}')`;
//       connection.query(queryText,(err, result) => {
//             res.setHeader("Content-Type", "application/json");
//             if(err == null){
//                   res.json({status:'success', data:result})
//             }
//             else{
//                   return res.status(401).json({ status: 'error', message: 'data is not found' });   
//             }
//       });
//  })
//  app.get("/booking", (req, res) => {
//       const connection = mysql2.createConnection(connectionString);
//       connection.connect();
//       let queryText =`select * from bookings`;
//       connection.query(queryText,(err, result) => {
//             res.setHeader("Content-Type", "application/json");
//             if(err == null){
//                   res.json({status:'success', data:result})
//             }
//             else{
//                   return res.status(401).json({ status: 'error', message: 'data is not found' });   
//             }
//       });
//  })

//category
app.post("/category/", (req, res) => {
 
         
          
            const connection = mysql2.createConnection(connectionString);
            connection.connect();
            let queryText = `insert into categoryvalues(${propertyId},${total},'${fromDate}', '${toDate}')`;
            // connection.query(queryText,(err, result) => {
            //       res.setHeader("Content-Type", "application/json");
            //       if(err == null){
            //             res.json({status:'success', data:result})
            //       }
            //       else{
            //             return res.status(401).json({ status: 'error', message: 'data is not found' });   
            //       }
            // });
       })

app.listen(PORT, ()=>{
      console.log("server running...")
})
