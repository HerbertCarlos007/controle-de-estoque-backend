import { ProductsProfits } from "../models/ProductProfit"

export const getLastProfit = async () => {
    const currentProductProfitId = await ProductsProfits.max('id')
    const currentProductProfit = await ProductsProfits.findOne({
        where: {
            id: String(currentProductProfitId)
        }
    })

    return currentProductProfit
}


