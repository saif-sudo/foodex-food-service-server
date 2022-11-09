const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/' , (req,res) => {
    res.send('foodex-cloud-kitchen is running')
})

app.listen(port , () =>{
    console.log(`foodex cloud kitchen running on ${port}`)
} )