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

  $('#send-config').on('click', function () {
    conn.sendConfig()
  })

  $('#start-reading').on('click', function () {
    conn.sendStartCommand()
  })
})
