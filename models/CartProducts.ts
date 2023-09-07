
import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript'
import { Optional } from 'sequelize'
import { Users } from './Users';


interface CartProductsAttributes {
    productId: number
    userId: number
    quantity?: number
    store_id: string
}

interface CartProductsCreationAttributes extends Optional<CartProductsAttributes, 'productId'> { }

@Table({
    timestamps: true
})

class CartProducts extends Model<CartProductsAttributes, CartProductsCreationAttributes> {
    @Column(DataType.DOUBLE)
    productId!: number
    
    @Column(DataType.DOUBLE)
    userId!: number

    @Column(DataType.DOUBLE)
    quantity?: number

    @Column(DataType.TEXT)
    store_id?: string

}

export { CartProducts }

