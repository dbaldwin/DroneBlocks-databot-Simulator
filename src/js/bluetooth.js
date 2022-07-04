/* eslint-disable no-unused-expressions */
const $ = require('jquery')
const Sensors = require('./sensors')

class Bluetooth {
  constructor () {
    this.serviceUUID = '0000ffe0-0000-1000-8000-00805f9b34fb'
    this.readUUID = '0000ffe1-0000-1000-8000-00805f9b34fb'
    this.writeUUID = '0000ffe2-0000-1000-8000-00805f9b34fb'
    this.bluetoothDevice
    this.mainServer
    this.writeCharacteristic
    this.readCharacteristic
    this.sensors = new Sensors()
    // Accel
    // this.config = '{"refresh":500,"decimal":2,"timeFactor":1000,"timeDec":2,"accl":true,"led1":{"state":true,"R":26,"Y":117,"B":118},"led2":{"state":true,"R":0,"Y":255,"B":0},"led3":{"state":true,"R":0,"Y":0,"B":255}}'
    // Light
    this.config = '{"refresh":500,"decimal":2,"timeFactor":1000,"timeDec":2,"accl":true,"gyro":true,"led1":{"state":true,"R":26,"Y":117,"B":118},"led2":{"state":false,"R":0,"Y":255,"B":0},"led3":{"state":false,"R":0,"Y":0,"B":255}}'
    // this.config = '{"refresh":500,"decimal":2,"timeFactor":1000,"timeDec":2,"accl":false,"Laccl":false,"gyro":true,"magneto":false,"IMUtemp":false,"Etemp1":false,"Etemp2":false,"pressure":false,"alti":false,"ambLight":false,"rgbLight":false,"UV":false,"co2":false,"voc":false,"hum":false,"humTemp":false,"Sdist":false,"Ldist":false,"noise":false,"gesture":false,"sysCheck":false,"usbCheck":false,"altCalib":false,"humCalib":false,"DtmpCal":false,"led1":{"state":true,"R":255,"Y":0,"B":0},"led2":{"state":true,"R":0,"Y":255,"B":0},"led3":{"state":true,"R":0,"Y":0,"B":255}}'
  }

  async connect () {
    try {
      const options = { filters: [{ name: 'DB_databot' }], optionalServices: [this.serviceUUID] }

      console.log('Requesting bluetooth device')
      const device = await navigator.bluetooth.requestDevice(options)

      // Listen for disconnect event
      device.addEventListener('gattserverdisconnected', this.disconnectHandler)

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

      await readCharacteristic.startNotifications()

      readCharacteristic.addEventListener('characteristicvaluechanged', (event) => { this.handleNotifications(event) })
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  disconnectHandler () {
    console.log('disconnectedHandler called')
  }

  disconnect () {
    this.mainServer.disconnect()
  }

  async sendConfig () {
    await this.writeCharacteristic.writeValue(new TextEncoder().encode(this.config))
  }

  async sendStartCommand () {
    try {
      await this.writeCharacteristic.writeValue(new TextEncoder().encode(this.config))
      await this.writeCharacteristic.writeValue(new TextEncoder().encode('1.0'))
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  handleNotifications (event) {
    const rawData = new TextDecoder().decode(event.target.value)
    this.sensors.decode(rawData)
    // const lightValue = rawValue.split(';l')[1].split(';')[0]
    // $('#lightValue').text(lightValue)
    // m5.0;l1234
  }
}

module.exports = Bluetooth
