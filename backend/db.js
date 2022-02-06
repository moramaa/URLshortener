import mongoose from 'mongoose'

const connectDB = async () => {
try {
    const conn =await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log(`mongDB is connected: ${conn.connection.host} `)
} catch (error) {
    console.error(`Error: ${error.massage}`)
    process.exit(1)

    }
}
export default connectDB






