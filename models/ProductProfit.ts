
import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript'
import { Optional } from 'sequelize'


interface ProductsProfitAttributes {
    id: number
    percentage: number
}

interface ProductsProfitCreationAttributes extends Optional<ProductsProfitAttributes, 'id'> { }

@Table({
    timestamps: true
})

class ProductsProfits extends Model<ProductsProfitAttributes, ProductsProfitCreationAttributes> {

    @Column(DataType.DOUBLE)
    percentage!: number 

}

export { ProductsProfits }

