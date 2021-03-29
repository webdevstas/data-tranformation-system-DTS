require('dotenv').config()
const io = require("socket.io")(process.env.DTS_SOC_PORT);

class CMySoc {
    constructor() {
        io.sockets.on("connection", (socket) => {

            console.log("DSS-Client connected!");

            socket.on("message", function (data) {
                console.log(data)
            });

            socket.on("disconnect", function (data) {
                console.log('DSS-Client disconnected!')
            });

            this.socket = socket
        });
    }

    sendMessage(data) {
        this.socket.send(data)
    }
}

const socket = new CMySoc()

module.exports = socket
