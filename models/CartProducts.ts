
import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript'
import { Optional } from 'sequelize'


interface CartProductsAttributes {
    productId: number
    userId: number
    quantity?: number
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



}

export { CartProducts }

