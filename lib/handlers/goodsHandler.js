function prepareData(incomeData) {
    if (incomeData.hasOwnProperty('goods') && incomeData.goods.length) {
        let result = incomeData
        result.date = new Date()
        result.total = computeTotalPrice(incomeData.goods)
        return result
    } else {
        throw new Error(`Message don't have the goods field or it's empty.` )
    }
}

function computeTotalPrice(goodsArr) {
    let total = 0
    goodsArr.forEach(item => {
        total += Number(item.price)
    })
    return total
}

module.exports = {prepareData}
