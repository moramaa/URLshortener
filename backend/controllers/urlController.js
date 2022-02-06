import asyncHandler from 'express-async-handler'
import Url from '../models/urlmodel.js'
import qs from 'qs';

// @desc Fetch all urls
// @route GET /api/url
// @access Public
const getUrl = asyncHandler(async (req, res)=>{
    const urls = await Url.find({})
     res.json(urls)
})

// @desc Create new url
// @route POST /api/url
// @access Private
const createUrl = asyncHandler(async (req, res)=>{

    const data = (Object.keys(req.body))
    const url = new Url ({full: data.toString()})          
            // save to DB             
            const createdUrl = await url.save();
            res.status(201).json(createdUrl)
            res.redirect('/')
         }
)
        
// @desc Fetch  urls
// @route GET /api/url
// @access Public
const getUrlById = asyncHandler(async (req, res)=>{
    console.log("mor")
    const shortUrl = await Url.findOne({ "short" : req.params.shortUrl})
    
    console.log(`the short: ${shortUrl.full}`)
    res.json(shortUrl.full)
    res.redirect(shortUrl.full)
})

export {getUrl, createUrl, getUrlById}