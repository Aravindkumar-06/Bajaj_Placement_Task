const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send('Move to this end point: http://localhost:3001/bfhl ')
})

app.get('/bfhl',(req,res)=>{
    res.send({ operation_code: 1 })
})


app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const userId = "john_doe_17091999"; 
    const email = "john@xyz.com";       
    const rollNumber = "ABCD123";     

    let numbers = [];
    let alphabets = [];
    let highestAlphabet = '';


    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (!highestAlphabet || item.toLowerCase() > highestAlphabet.toLowerCase()) {
                highestAlphabet = item;
            }
        }
    });

    
    const response = {
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet ? [highestAlphabet] : []
    };

    res.json(response);
});



app.listen(3001, ()=>{
    console.log('Server is running at port 3000')
})