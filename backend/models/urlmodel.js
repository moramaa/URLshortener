import mongoose from 'mongoose'
import shortId from 'shortid'



const urlSchema = mongoose.Schema({
    full:{
        type:String,
        required:true,
        } ,
    short:{
        type:String,
        required:true,
        default:shortId.generate
        } ,
    clicks:{
        type: Number,
        required:true,
        default: 0
            } 
})
// creat the url DB 
const Url = mongoose.model('Url',urlSchema)

export default Url