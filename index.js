require('dotenv').config()
const CSocServer = require('./lib/classes/CSocServer')
const CSocClient = require('./lib/classes/CSocClient')
const dsServer = new CSocClient(process.env.DS_URL, 'DS-Server')
const dssClient = new CSocServer(process.env.DTS_SOC_PORT, 'DSS-Client')
const {prepareData} = require('./lib/handlers/goodsHandler')

dsServer.on('message',function(data){
    try {
        console.log(prepareData(data))
    } catch (err) {
        console.log(err)
    }
})

