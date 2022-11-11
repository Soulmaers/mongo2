const express = require('express')
const mongoose = require('mongoose')



const app = express();

const bookRouter = require('./routes/book')

const port = process.env.PORT || 3333;

app.use(express.json())
app.use('/books', bookRouter)
async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')
        app.listen(port, () => {
            console.log(`Сервер запущен порт:${port}`);
        })
    }

    catch (e) {
        console.log(e)
    }
}
start();
