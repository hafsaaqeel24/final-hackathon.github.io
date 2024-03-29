const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./modules/Employee')

const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect('mongodb://localhost:27017/employee');
mongoose.connect('mongodb://127.0.0.1:27017/employee');


app.post('/login', (req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email,password})
    .then(user=>{
        if(user){
            if(user.password === password) {
                res.join('success')
            }else{
                res.join('the password is incorrect')
            }
        }else{
            res.join('no record exist')
        }
    })
})

app.post('/register', (req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees =>res.json(employees))
    .catch(err =>res.json(err))
})

app.listen(3001, ()=>{
    console.log('server is running');
})