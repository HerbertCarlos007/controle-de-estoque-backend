
import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript'
import { Optional } from 'sequelize'


interface StoreAttributes {
    id: number
    name: string
    subdomain: string,
    banner: string,
    store_name: string,
    logo: string,
    background: string,
    colors: string
}

interface StoreCreationAttributes extends Optional<StoreAttributes, 'id'> { }

@Table({
    timestamps: true
})

class Store extends Model<StoreAttributes, StoreCreationAttributes> {
    @Column(DataType.TEXT)
    name: string | undefined;
    
    @Column(DataType.TEXT)
    subdomain!: string | undefined;
    
    @Column(DataType.TEXT)
    banner!: string | undefined
    
    @Column(DataType.TEXT)
    store_name!: string | undefined
    
    @Column(DataType.TEXT)
    logo!: string | undefined
    
    @Column(DataType.TEXT)
    background!: string | undefined
    
    @Column(DataType.TEXT)
    colors!: string | undefined
}

export { Store }

