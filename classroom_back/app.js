require('dotenv').config()
const express = require('express')
const app = express()

//Db imports
const {testDbConection} = require("./db/dbConnection")
const syncDB = require('./db/syncDb')

//Routes imports
const authRoute = require('./api/auth/routes/authRoute')
const handleUsersRoute = require('./api/auth/routes/handleUsersRoute')
const classesRoute = require('./api/classes/routes/classesRoutes')
const sessionRoutes = require('./api/classes/routes/sessionRoutes')

// App configuration
//syncDB()
 // require('./db/testData')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(function(req, res, next){
  console.log('pass');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

app.use('/api/v1/auth/',handleUsersRoute)
app.use('/api/v1/auth/',authRoute)
app.use('/api/v1/classes/',classesRoute)
app.use('/api/v1/session/',sessionRoutes)

if (testDbConection()) {
    app.listen(process.env.PORT ,async () => {
        console.log(`Example app listening at http://localhost:${process.env.PORT}`)
      })    
}else{
    console.log("Error connecting to DB");
}
