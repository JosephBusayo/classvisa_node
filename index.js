require('dotenv').config()
const express = require('express')
const app = express()

//middleware
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())


const todo_list = {
    "todos" : [
        {
            "id" : 1,
            "name" : "Learn express",
            "complete" : false
        },
        {
            "id" : 23,
            "name" : "Get a tech job",
            "complete" : false
        }
    ]
}

//ROUTES
app.get('/todo', (req, res)=>{
    res.status(200).send(todo_list)
    console.log(todo_list["todos"])
})

//params
app.get('/todo/:id', (req, res, next)=>{
    const {id} = req.params
    const todo = todo_list["todos"]

    for(let i=0; i<todo.length; i++){
        if(todo[i].id == id){
            res.send(todo[i])
        }else{
            res.status(404)
        }
    }
    next()
})

app.post('/todo', (req, res)=>{
    const todo = todo_list["todos"]
    const id = todo.length + 1

    const new_todo = req.body
    new_todo.id = id

    todo.push(new_todo)
    res.send(201)
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})


/* app.get('/', (req, res)=> {
    res.send('HOME PAGE')
})
app.get('/todo', (req, res)=>{
    res.status(200).send(todo_list)
}) */









































/* 



app.get('/', (req, res) =>{
    res.send("Hello world")
})

app

app.listen(process.env.PORT) */
