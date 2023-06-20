import aws, { AWSError, S3 } from 'aws-sdk'
import path from 'path'
import multerConfig from '../config/multer'
import mime from 'mime'
import fs from 'fs'
import { GetObjectAclOutput, GetObjectOutput } from 'aws-sdk/clients/s3'

class S3Storage {
    private client: S3

    constructor() {
        this.client = new aws.S3({
            region: 'us-east-1'
        })
    }

    async saveFile(filename: string): Promise<any> {
        try {
            const originPath = path.resolve(multerConfig.directory, filename)

            const contentType = mime.getType(originPath)

            if (!contentType) {
                throw new Error('file not found')
            }

            const fileContent = await fs.promises.readFile(originPath)

            const result = await this.client.putObject({
                Bucket: 'teste-startpn',
                Key: filename,
                Body: fileContent,
                ContentType: contentType,
                ACL: 'public-read',
            })
                .promise()
            await fs.promises.unlink(originPath)
            console.log({ result })
            return result

        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async deleteFile(filename: string): Promise<void> {
        await this.client.deleteObject({
            Bucket: 'teste-startpn',
            Key: filename
        })
            .promise()
    }

    async getFile(filename: string): Promise<GetObjectOutput> {
        try {
            const fileReturn = await this.client.getObject({
                Bucket: 'teste-startpn',
                Key: filename
            })
                .promise()
            return fileReturn
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export default S3Storage