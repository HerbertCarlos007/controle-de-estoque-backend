import S3Storage from "../utils/S3Storage"
import { PutObjectOutput, } from 'aws-sdk/clients/s3';

class UploadImagesService {

    async execute(file: Express.Multer.File): Promise<any> {
        try {
            const s3Storage = new S3Storage()
            const savedFile = await s3Storage.saveFile(file.filename)
            return savedFile

        } catch (error) {
            console.error(error)
            throw error
        }

    }
}

export default UploadImagesService