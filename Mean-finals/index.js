var Express = require('express')
var Mongoclient = require('mongodb').MongoClient;
var cors = require('cors');
const multer = require('multer');

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://cjcrisostomo:20689514@cluster0.9jfzzl7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// database name
var DATABASENAME = 'MyDb'

// instatiate mongodbclient
var database;


//listener
app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING,(error, client) => {database=client.db(DATABASENAME);
    console.log("Successfully Connected")})
});

//fetch data  GET
app.get('/api/books/GetBooks', (req,res) => {
    database.collection('books').find({}).toArray((error, result) => {
        res.send(result);
    })
})


//fetch data POST   
app.post('/api/books/AddBook', multer().none(), async(req,res) => {
    try{
        const numOfDocs = await database.collection("books").countDocuments();
        await database.collection('books').insertOne({
            id: numOfDocs + 1,
            title: req.body.title,
            description: req.body.description,
            price: parseInt(req.body.price)
        });
        res.json('Added Succesfully');
    }catch(error){console.error('Error adding book: ', error);
    res.status(500).json({error: 'Failed to add book'})

        }
    }
)

//DELETE
app.delete('/api/books/DeleteBook', (req, res) => {
    database.collection('books').deleteOne({
        id:  req.query.id 

    });
    res.json('Deleted Successfully');
})