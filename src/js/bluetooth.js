/* eslint-disable no-unused-expressions */

class Bluetooth {
  constructor () {
    this.serviceUUID = '0000ffe0-0000-1000-8000-00805f9b34fb'
    this.readUUID = '0000ffe1-0000-1000-8000-00805f9b34fb'
    this.writeUUID = '0000ffe2-0000-1000-8000-00805f9b34fb'
    this.bluetoothDevice
    this.mainServer
    this.writeCharacteristic
    this.readCharacteristic
    this.config = '{"refresh":500,"decimal":2,"timeFactor":1000,"timeDec":2,"accl":false,"Laccl":false,"gyro":true,"magneto":false,"IMUtemp":false,"Etemp1":false,"Etemp2":false,"pressure":false,"alti":false,"ambLight":false,"rgbLight":false,"UV":false,"co2":false,"voc":false,"hum":false,"humTemp":false,"Sdist":false,"Ldist":false,"noise":false,"gesture":false,"sysCheck":false,"usbCheck":false,"altCalib":false,"humCalib":false,"DtmpCal":false,"led1":{"state":true,"R":255,"Y":0,"B":0},"led2":{"state":true,"R":0,"Y":255,"B":0},"led3":{"state":true,"R":0,"Y":0,"B":255}}'
  }

  async connect () {
    try {
      const options = { filters: [{ name: 'DB_databot' }], optionalServices: [this.serviceUUID] }

      console.log('Requesting bluetooth device')
      const device = await navigator.bluetooth.requestDevice(options)

      console.log('Connecting to GATT server')
      const server = await device.gatt.connect()
      this.mainServer = server

      console.log('Getting service')
      const service = await server.getPrimaryService(this.serviceUUID)

      console.log('Getting write characteristic')
      const writeCharacteristic = await service.getCharacteristic(this.writeUUID)
      this.writeCharacteristic = writeCharacteristic

      console.log('Getting read characteristic')
      const readCharacteristic = await service.getCharacteristic(this.readUUID)
      this.readCharacteristic = readCharacteristic
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  disconnectHandler () {
    console.log('disconnected')
  }

  disconnect () {
    this.mainServer.disconnect()
  }

  async sendConfig () {
    try {
      // const encodedConfig = new TextEncoder().encode(this.config)
      // await this.writeStrToCharacteristic(encodedConfig)
      // console.log('Done sending config')
      const zpl = this.config

      const maxChunk = 256
      let j = 0

      if (zpl.length > maxChunk) {
        for (let i = 0; i < zpl.length; i += maxChunk) {
          let subStr
          if (i + maxChunk <= zpl.length) {
            subStr = zpl.substring(i, i + maxChunk)
          } else {
            subStr = zpl.substring(i, zpl.length)
          }
          setTimeout(this.writeStrToCharacteristic.bind(this), 250 * j, subStr)
          j++
        }
      }
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  async sendStartCommand () {
    try {
      const encodedString = new TextEncoder().encode('1')
      console.log('Sending start command')
      await this.writeCharacteristic.writeValue(encodedString)
      console.log('Done sending start command')
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  writeStrToCharacteristic (str) {
    console.log(str)
    const buffer = new ArrayBuffer(str.length)
    const dataView = new DataView(buffer)
    for (let i = 0; i < str.length; i++) {
      dataView.setUint8(i, str.charAt(i).charCodeAt())
    }
    console.log(buffer)
    this.writeCharacteristic.writeValue(buffer)
  }
}

module.exports = Bluetooth
