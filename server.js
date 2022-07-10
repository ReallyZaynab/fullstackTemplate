//1. Initialize npm and install dependencies
// express, dotenv, cors, mongodb, ejs, nodemon (--save-dev)

//2. require dependencies

const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require("dotenv").config()

//3. declare variables

let db,
    dbConnectionString = process.env.DB_STRING, //this step pulls our secret connection string out of our environment file and keep it secret and safe
    dbName = "helpers",
    collection 

//4. Connect to MongoDB - add connection string to .env file
//touch .env and get connection string from mongoDB and add it to .env file
//Then establish a connection to Mongo using the string. 
//This can be done as a promise or async function

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log("connected to database")
        db = client.db(dbName)
        collection = db.collection("helpers")
    })

//5. add .env to gitignore

//6. Create port. (this helps create our endpoint)

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server is running on port`)
})

//---test Mongo and port connection. You can do this manually
//by typing node server.js in the terminal. But we have setup
//nodemon so 

//7. Set middleware. This must happen before any CRUD operations.

app.set("view engine", "ejs")
app.use(express.static("public")) //we are setting up a file to serve 
//files such as main.js and style.css. It sets up external files and we 
//store them in the public folder. Everything that is served on the homepage
//is from this public folder.
app.use(express.urlencoded({extended:true}))
app.use(express.json()) //when things go back and forth between app and server
//it is parsed as json
app.use(cors()) //this is for cross origin requests to prevent errors

//8. Create Public and Views Folders. Add main.js and
//style.css to public and index.ejs to views

//9. Add content to main.js, style.css, index.ejs

//10.Remove .env from gitignore and them Create Heroku repo by pushing to Heroku
//using git.
