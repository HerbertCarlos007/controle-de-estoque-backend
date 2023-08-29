import { Table, Column, Model, DataType, AllowNull, ForeignKey } from 'sequelize-typescript';
import { Users } from './Users';

interface ProductsAttributes {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  amount: number;
  brand: string;
  purchasePrice: number;
  userId: number; // Agora userId é obrigatório
}

@Table({
  timestamps: true,
})
class Products extends Model<ProductsAttributes> {

  @Column(DataType.TEXT)
  name: string | undefined;

  @Column(DataType.TEXT)
  description: string | undefined;

  @Column(DataType.TEXT)
  imageUrl: string | undefined;

  @Column(DataType.DOUBLE)
  amount: number | undefined;

  @Column(DataType.TEXT)
  brand: string | undefined;

  @Column(DataType.DOUBLE)
  purchasePrice: number | undefined;

  @ForeignKey(() => Users)
  @Column(DataType.INTEGER)
  userId: number | undefined;
}

export { Products };
