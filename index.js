const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://dbUser2:vrD19mSrULAKMN3E@cluster0.lzohisf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const serviceCollection = client.db('simpleNode').collection('users');

        app.get('/services', async (req,res) =>{
            const query = {}
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);

           
    });

    app.get('/services/:id', async (req,res) =>{
       const id = req.params.id;
       const query = {_id: ObjectId(id)};
       const service = await serviceCollection.findOne(query);
       res.send(service);

      
       
});

app.post('/services', async (req,res) =>{
    const service = req.body;
    
    const result = await serviceCollection.insertOne(service);
    res.send(result);

});

       /* const user = {name: 'Mehedi Ali' , email:'mehedi@gmail.com'};
        const result = await userCollection.insertOne(user);
        console.log(result);*/
    }finally{

    }
}
run().catch(err => console.log(err));

app.get('/' , (req,res) => {
    res.send('foodex-cloud-kitchen is running');

    
})

app.listen(port , () =>{
    console.log(`foodex cloud kitchen running on ${port}`)
} )






