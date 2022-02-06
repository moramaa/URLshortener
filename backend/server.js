import express  from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import urlRoutes from './routes/urlRoutes.js'
import bodyParser from 'body-parser'
import path  from 'path' 


dotenv.config() 


const app = express()

connectDB() 

app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',urlRoutes)

// Heroku 
const __dirname = path.resolve()
//app.use('/uploads' ,express.static(path.join(__dirname, '/uploads')))
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/urlshort/build')))
    app.get('*',(req,res)=> 
        res.sendFile(path.resolve(__dirname,'urlshort','build','index.html')))
}else{
    app.get('/',(req,res) => {
    res.send('API is running...')
})
}


const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}` )
    )
