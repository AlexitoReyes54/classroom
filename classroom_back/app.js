require('dotenv').config()
const express = require('express')
const app = express()
const {testDbConection} = require("./db/dbConnection")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

if (testDbConection()) {
    app.listen(process.env.PORT , () => {
        console.log(`Example app listening at http://localhost:${process.env.PORT}`)
      })    
}else{
    console.log("Error connecting to DB");
}
