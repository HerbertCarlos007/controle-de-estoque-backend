import {hash} from 'bcryptjs'

export const encryptPassword = async (password: string): Promise<string> => (await hash(password, 8))