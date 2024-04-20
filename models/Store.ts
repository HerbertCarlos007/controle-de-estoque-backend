
import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript'
import { Optional } from 'sequelize'


interface StoreAttributes {
    id?: number
    subdomain?: string,
    banner?: string,

}

interface StoreCreationAttributes extends Optional<StoreAttributes, 'id'> { }

@Table({
    timestamps: true
})

class Store extends Model<StoreAttributes, StoreCreationAttributes> {
    @Column(DataType.TEXT)
    subdomain: string | undefined

    @Column(DataType.TEXT)
    banner: string | undefined

}

export { Store }

