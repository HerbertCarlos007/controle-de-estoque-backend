import { Table, Column, Model, DataType, AllowNull, ForeignKey } from 'sequelize-typescript';
import { Optional } from 'sequelize'
import { Store } from './Store';

interface UsersAttributes {
    id: number
    name: string
    email: string,
    password: string,
    role: string
    store_id: string,
    levelPermission: number
}

interface UsersCreationAttributes extends Optional<UsersAttributes, 'id'> { }

@Table({
    timestamps: true
})

class Users extends Model<UsersAttributes, UsersCreationAttributes> {


    @Column(DataType.TEXT)
    name: string | undefined

    @Column(DataType.TEXT)
    email: string | undefined
    
    @Column(DataType.TEXT)
    role: string | undefined

    @Column(DataType.TEXT)
    password: string | undefined
    
    @ForeignKey(() => Store)
    @Column(DataType.TEXT)
    store_id: string | undefined
    
    @ForeignKey(() => Store)
    @Column(DataType.INTEGER)
    levelPermission: number | undefined

}

export { Users }

