const {prepareData} = require('../../lib/handlers/goodsHandler')
const emptyGoods = {
    goods: []
}
const correctData = {
    goods: [
        {name: 'apples', price: '230'},
        {name: 'carrot', price: '230'},
    ]
}


describe('test the prepareData function', () => {

    it('should returns the object with new fields - date, total', () => {
        let result = prepareData(correctData)
        expect(result).toHaveProperty('goods', correctData.goods)
        expect(result).toHaveProperty('date', expect.any(Date))
        expect(result).toHaveProperty('total', 460)
    })

    it('should throws error if pass empty object', () => {
        expect(() => {
            prepareData({})
        }).toThrow()
    })

    it('should throws error if pass empty goods array', () => {
        expect(() => {
            prepareData(emptyGoods)
        }).toThrow()
    })
})
