/* eslint-disable no-new */
import * as Blockly from 'blockly'
import blocklyXML from '../static-components/blockly_xml.html'
import Sensing from './blocks/sensing'
import DroneBlocksTheme from '../themes/droneblocks'
const $ = require('jquery')

$(function () {
  // Create the Blockly toolbox
  const xmlDiv = document.createElement('div')

  if (xmlDiv) {
    xmlDiv.innerHTML = blocklyXML
    document.body.appendChild(xmlDiv)
  }

  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    media: 'media/'
  })

  workspace = Blockly.inject('blocklyDiv', {
    theme: DroneBlocksTheme,
    toolbox: document.getElementById('toolbox'),
    media: 'media/',
    grid: {
      spacing: 20,
      length: 1,
      colour: '#888',
      snap: false
	  },
    zoom: {
      controls: true,
      startScale: 1,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2
	  }
  })

  // Init our custom blocks for the toolbox
  new Sensing()
})
