import { Table, Column, Model, DataType, AllowNull} from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface ProductsAttributes {
  id: number
  name: string 
  description: string
  amount: number
  brand: string
  purchasePrice: number
  saleValue: number
}

interface ProductsCreationAttributes extends Optional<ProductsAttributes, 'id'> {}

@Table({
  timestamps: true
})

class Products extends Model <ProductsAttributes, ProductsCreationAttributes> {

  @Column(DataType.TEXT)
  name: string | undefined

   @Column(DataType.TEXT)
  description: string | undefined

  @Column(DataType.DOUBLE)
  amount: number | undefined

  @Column(DataType.TEXT)
  brand: string | undefined

  @Column(DataType.DOUBLE)
  purchasePrice: number | undefined

  @Column(DataType.DOUBLE)
  saleValue: number | undefined
}

export {Products}