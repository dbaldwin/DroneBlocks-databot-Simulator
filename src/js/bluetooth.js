/* eslint-disable no-unused-expressions */

class Bluetooth {
  constructor () {
    this.serviceUUID = '0000ffe0-0000-1000-8000-00805f9b34fb'
    this.readUUID = '0000ffe1-0000-1000-8000-00805f9b34fb'
    this.writeUUID = '0000ffe2-0000-1000-8000-00805f9b34fb'
    this.bluetoothDevice
    this.mainServer
    this.writeCharacteristic
    this.config = '{"refresh":500,"decimal":2,"timeFactor":1000,"timeDec":2,"accl":false,"Laccl":false,"gyro":true,"magneto":false,"IMUtemp":false,"Etemp1":false,"Etemp2":false,"pressure":false,"alti":false,"ambLight":false,"rgbLight":false,"UV":false,"co2":false,"voc":false,"hum":false,"humTemp":false,"Sdist":false,"Ldist":false,"noise":false,"gesture":false,"sysCheck":false,"usbCheck":false,"altCalib":false,"humCalib":false,"DtmpCal":false,"led1":{"state":true,"R":255,"Y":0,"B":0},"led2":{"state":true,"R":0,"Y":255,"B":0},"led3":{"state":true,"R":0,"Y":0,"B":255}}'
  }

  connect () {
    const options = { filters: [{ name: 'DB_databot' }], optionalServices: [this.serviceUUID] }

    navigator.bluetooth.requestDevice(options).then(device => {
      this.bluetoothDevice = device
      this.bluetoothDevice.addEventListener('gattserverdisconnected', this.disconnectHandler.bind(this))
      console.log(`Found ${this.bluetoothDevice.name}`)
      return device.gatt.connect()
    }).then(server => {
      this.mainServer = server
      console.log('Bluetooth device connected')
      return server.getPrimaryService(this.serviceUUID)
    // Getting service
    }).then(service => {
      console.log(`Service: ${service}`)
      return service.getCharacteristic(this.writeUUID)
    }).then(characteristic => {
      this.writeCharacteristic = characteristic
      console.log(`Characteristic: ${characteristic}`)
    }).catch(error => {
      console.log(`Error: ${error}`)
    })
  }

  disconnectHandler () {
    console.log('disconnected')
  }

  disconnect () {
    this.mainServer.disconnect()
    // Not sure what to do here
  }

  sendConfig () {
    const encodedConfig = new TextEncoder().encode(this.config)
    console.log(encodedConfig)
    return this.writeCharacteristic.writeValue(encodedConfig)
  }

  sendStartCommand() {
    const encodedString = new TextEncoder().encode('1')
    return this.writeCharacteristic.writeValue(encodedString)
  }
}

module.exports = Bluetooth
