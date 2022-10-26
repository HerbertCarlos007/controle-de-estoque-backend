import { Table, Column, Model, DataType, AllowNull} from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface ProductsAttributes {
  id: number
  name: string
  imageUrl: string
  description: string
  amount: number
  brand: string
  purchasePrice: number
  
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

  @Column(DataType.TEXT)
  imageUrl: string | undefined

  @Column(DataType.DOUBLE)
  amount: number | undefined

  @Column(DataType.TEXT)
  brand: string | undefined

  @Column(DataType.DOUBLE)
  purchasePrice: number | undefined

}

export {Products}