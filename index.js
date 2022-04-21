const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// cors allow
app.use(cors())
// parser
app.use(express.json())

app.get('/', (req, res) => {
    res.send('I am here')
});

const users = [
    { id: 1, name: "Rakib", email: "Rakib@gmail.com" },
    { id: 2, name: "sakib", email: "sakib@gmail.com" },
    { id: 3, name: "nakib", email: "nakib@gmail.com" },
    { id: 4, name: "mafiz", email: "mafiz@gmail.com" },
    { id: 5, name: "nafis", email: "nafis@gmail.com" },
    { id: 6, name: "tariq", email: "tariq@gmail.com" },
    { id: 7, name: "sagor", email: "sagor@gmail.com" }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send('Boom')
})

app.listen(port, () => {
    console.log('Port id', port)
})