const ImageRouter = require('express').Router()
import { Request, response, Response } from 'express'
import UploadImageService from '../services/UploadImageService'
import DeleteImageService from '../services/DeleteImageService'
import multer = require('multer')
import multerConfig from '../config/multer'

const upload = multer(multerConfig)

ImageRouter.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
   

    return res.status(200).json()
})

ImageRouter.delete('/:filename', async(req: Request, res: Response) => {
    const { filename } = req.params
    const deleteImagesService = new DeleteImageService()
    await deleteImagesService.execute(filename)
    return res.send()
})


export default ImageRouter

