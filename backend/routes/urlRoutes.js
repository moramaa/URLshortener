import express from 'express'
import {getUrl, createUrl, getUrlById} from '../controllers/urlController.js'

const router = express.Router()

router.route('/').get(getUrl)
router.route('/').post(createUrl)
router.route('/:shortUrl').get(getUrlById)


export default router
