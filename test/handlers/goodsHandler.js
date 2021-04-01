const {prepareData} = require('../../lib/handlers/goodsHandler')
const correctData = {
    goods: [
        {name: 'apples', price: '230'}
    ]
}

describe('test the prepareData function', () => {
    it('should returns the object with new fields - date, total', () => {
        let result = prepareData(correctData)
    })
})
