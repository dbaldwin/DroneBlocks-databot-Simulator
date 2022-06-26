const $ = require('jquery')
const Bluetooth = require('./bluetooth')

let conn

$(function () {
  $('#connect').on('click', function () {
    conn = new Bluetooth()
    conn.connect()
  })

  $('#disconnect').on('click', function () {
    conn.disconnect()
  })

  $('#sendConfig').on('click', function () {
    conn.sendConfig().then(_ => {
      console.log('config sent')
    })
  })

  $('#start-reading').on('click', function () {
    conn.sendStartCommand().then(_ => {
      console.log('start command sent')
    })
  })
})
