const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "",
    "",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
// middleware
app.use(cors(corsOptions));
app.use(express.json());
const uri = `mongodb+srv://${process.env.user_DB}:${process.env.secret_KEY}@cluster0.2evw8as.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const menuCollection = client.db("bistroBoss").collection("menu");
    const reviewCollection = client.db("bistroBoss").collection("reviews");
    const cartCollection = client.db("bistroBoss").collection("cart");
    const userCollection = client.db("bistroBoss").collection("users");

    // post user data
    app.post('/users',async(req,res)=>{
      const user = req.body;
      const query = {email:user.email}
      const existingUser = await userCollection.findOne(query);
      if(existingUser){
        res.send({message:`user already exists`,insertedId:null})
      }
      const result = await userCollection.insertOne(user)
      res.send(result)
    })
    // get menu item from the db
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });
    // get menu item from the db
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });

    // post a cart
    app.post('/cart',async(req,res)=>{
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem)
      res.send(result)
    })

    // 
    app.get('/cart',async(req,res)=>{
      const email = req.query.email;
      const query = {email:email}
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    })

    // delete element
    app.delete('/cart/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Bistro Boss is running on the server");
});

app.listen(port, () =>
  console.log(`Bistro Boss: server is running on the port ${port}`)
);
