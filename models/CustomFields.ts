
import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript'
import { Optional } from 'sequelize'


interface CustomFieldsAttributes {
    id: number
    name: string
    logo: string,
    background: string,
    colors: string
    store_id: string
}

interface CustomFieldsCreationAttributes extends Optional<CustomFieldsAttributes, 'id'> { }

@Table({
    timestamps: true
    
})

class CustomFields extends Model<CustomFieldsAttributes, CustomFieldsCreationAttributes> {
    @Column(DataType.TEXT)
    name: string | undefined
    
    @Column(DataType.TEXT)
    logo: string | undefined
    
    @Column(DataType.TEXT)
    background: string | undefined
    
    @Column(DataType.TEXT)
    colors: string | undefined
    
    @Column(DataType.TEXT)
    store_id: string | undefined
}

export { CustomFields }

