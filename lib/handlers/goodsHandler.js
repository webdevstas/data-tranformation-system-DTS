function prepareData(incomeData) {
    let result = incomeData
    result.date = new Date()
    result.total = computeTotalPrice(incomeData.goods)
    return result
}

function computeTotalPrice(goodsArr) {
    let total = 0
    goodsArr.forEach(item => {
        total += Number(item.price)
    })
    return total
}

module.exports = {prepareData}
