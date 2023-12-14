require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const connenction = require('./db')
const jwt = require('jsonwebtoken');
const goalRoutes = require('./routes/goalRoutes')
const userRoutes  = require('./routes/userRoutes');
const port = 4000;


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use('/api/goals',goalRoutes);
app.use('/api/users',userRoutes);
const posts = [
   {
        username:"cibiyanna",
        title:"Post 1",
   },
   {
        username:"arulkarthi",
        title:"Post 2",
   }
    
]

connenction();

app.get('/posts',(req,res)=>{
    res.json(posts)
})




app.listen(port,()=>{
    console.log(`listening of port ${port}`)
});