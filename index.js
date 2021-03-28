const dsServer = require("socket.io-client")('ws://localhost:8100')
const dssClient = require('./providers/socket')
const {prepareData} = require('./handlers/goodsHandler')

dsServer.on("connect",function(){
    console.log('DS Connected')
})

dsServer.on('message',function(data){
    console.log(prepareData(data))
})

dsServer.on("disconnect", function () {
    console.log('DS Disconnected')
})

