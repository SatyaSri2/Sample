const express = require('express')
const bodyParser = require('body-parser') // importing body-parser
const app = express()
app.use(bodyParser.json()) // using body-parser middleware

let data=[
    {
        id:1,
        name: 'Name 1',
        age: 20
    },
    {
        id:2,
        name: 'Name 2',
        age: 25
    },
    {
        id:3,
        name: 'Name 3',
        age: 30
    }
]

app.get('/data',(req,res)=>{
    res.json(data)
})

//localhost:3000/data/1
app.get('/data/:id',(req,res)=>{
    const id =parseInt(req.params.id)//id=1
    const dataUser=data.find(data=>data.id===id)
    if(dataUser){
        res.json(dataUser) //returning the data
    }
})

app.post('/data',(req,res)=>{
    const {name, age}=req.body
    const id=data.length+1
    const newData=
    {
        id,
        name,
        age
    }
    data.push(newData)
    res.json(newData)
})

app.delete('/data/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const index=data.findIndex(data=>data.id===id)
    data.splice(index,1)//splice means remove
    res.json({message:'Data deleted'})
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/page2',(req,res)=>{
    res.send('Admin Page')
})

app.get('/page3',(req,res)=>{
    res.send('Welcome To Page3')
})

app.get('/page4',(req,res)=>{
    res.send('Welcome To Page4')
})

app.get('/movies',(req,res)=>{
    res.send('Welcome To Movies')
    console.log('Welcome To Movies')
})

app.get('/movies/characters',(req,res)=>{
    res.send('List of characters in the movie')
    console.log('Welcome To Movies')
})
app.listen(3000, ()=>{
    console.log('Server is running on port http://localhost:3000')
}) // portnum for localhost