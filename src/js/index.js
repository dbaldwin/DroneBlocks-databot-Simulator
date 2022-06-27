const $ = require('jquery')
const Bluetooth = require('./bluetooth')
const Drone = require('./drone')

let conn
const drone = new Drone()

$(function () {
  $('#connect').on('click', function () {
    conn = new Bluetooth()
    conn.connect()
  })

  $('#disconnect').on('click', function () {
    conn.disconnect()
  })

  // $('#send-config').on('click', function () {
  //   conn.sendConfig()
  // })

  $('#start-reading').on('click', function () {
    conn.sendStartCommand()
  })

  $('#lightValue').on('DOMSubtreeModified', function () {
    const val = parseFloat($(this).text())

    if (val > 1000 && !drone.isFlying) {
      console.log('taking off')
      drone.takeoff()
    } else if (val < 100 && drone.isFlying) {
      console.log('landing')
      drone.land()
    }
  })
})
