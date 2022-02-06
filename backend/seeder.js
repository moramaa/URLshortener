// bring data from backend to mongoDB
import dotenv from 'dotenv'
import connectDB from './db.js'

import Url from './models/urlmodel.js'

import urls from './data/urls.js'

dotenv.config()

connectDB()

const importData = async ()=> {
    try {
        await Url.deleteMany()

        const createdUrls = await Url.insertMany(urls)

        console.log(`Data Imported!`)
        process.exit()

    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
        
    }
}


const destroyData = async ()=> {
    try {
        await Url.deleteMany()

        console.log(`Data Destroy!`)
        process.exit()

    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
        
    }
}
// '-d' destroy data
if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}