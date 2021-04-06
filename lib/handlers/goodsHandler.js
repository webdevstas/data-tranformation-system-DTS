/**
 * Checks if incomeData has the goods field and it's length > 0, then add date and total fields.
 * @param {Object} incomeData
 * @returns {Object} Result object with new fields.
 */
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

/**
 *
 * @param {Array <Object>} goodsArr
 * @returns {number} Total price
 */
function computeTotalPrice(goodsArr) {
    let total = 0
    goodsArr.forEach(item => {
        total += Number(item.price)
    })
    return total
}

module.exports = {prepareData}
