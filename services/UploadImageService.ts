import S3Storage from "../utils/S3Storage";

class UploadImageService {
    
    async execute(file: Express.Multer.File): Promise<any> {
        try {
            const s3Storage = new S3Storage()
            const savedFile = await s3Storage.saveFile(file.filename)
            return savedFile
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export default UploadImageService