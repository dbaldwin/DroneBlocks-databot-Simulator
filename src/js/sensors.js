// Accel and gyro
// m92.50;a0.03;s-9.73;f0.32;A9.74;x-2.43;y0.07;z0.99;

// databot tilted 90 degrees forward around the X axis
// {
//   "a": "-0.00",
//   "s": "-9.87",
//   "f": "0.54",
//   "A": "9.88",
//   "x": "0.03",
//   "y": "0.02",
//   "z": "0.17"
// }

// databot titled 90 degrees backward around the x axis
// {
//   "a": "0.01",
//   "s": "9.74",
//   "f": "0.57",
//   "A": "9.76",
//   "x": "0.14",
//   "y": "0.02",
//   "z": "-0.22"
// }

const decodedSensorData = {
  a: 0.0, // X acceleration
  s: 0.0, // Y acceleration
  f: 0.0, // Z acceleration
  A: 0.0, // absolute acceleration
  x: 0.0, // X rotation
  y: 0.0, // Y rotation
  z: 0.0 // Z rotation
}

class Sensors {
  constructor () {

  }

  decode (rawString) {
    const parts = rawString.split(';')
    decodedSensorData.a = parts[1].split('a')[1]
    decodedSensorData.s = parts[2].split('s')[1]
    decodedSensorData.f = parts[3].split('f')[1]
    decodedSensorData.A = parts[4].split('A')[1]
    decodedSensorData.x = parts[5].split('x')[1]
    decodedSensorData.y = parts[6].split('y')[1]
    decodedSensorData.z = parts[7].split('z')[1]
    console.log(decodedSensorData)
  }

  getDecodedSensorData () {
    return this.decodedSensorData
  }
}

module.exports = Sensors
