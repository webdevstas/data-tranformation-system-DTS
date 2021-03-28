function prepareData(incomeData) {
    let date = new Date()
    let result = incomeData
    result.date = date
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
