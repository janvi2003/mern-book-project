const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB Configuration
const uri = "mongodb+srv://mern-book-store:janvi275450@cluster0.nrokrcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    
    const bookCollections = client.db("BookInventory").collection("books");

    // Endpoint to upload a book
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send({ message: "Error uploading book", error });
      }
    });

    // Endpoint to get books by category
    app.get("/all-books", async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
        const result = await bookCollections.find(query).toArray();
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ message: "Error fetching books", error });
      }
    });
    app.get("/books/:id",async(req,res)=>{
      const id= req.params.id;
      const filter={ _id:new Object(id)};
      const result=await bookCollections.findOne(filter);
      res.send(result);
    })
    // Endpoint to update a book
    app.patch("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: { ...updateBookData }
        };
        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ message: "Error updating book", error });
      }
    });
 
    // Endpoint to delete a book
    app.delete("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollections.deleteOne(filter);
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ message: "Error deleting book", error });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
