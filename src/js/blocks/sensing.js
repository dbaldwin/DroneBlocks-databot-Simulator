import * as Blockly from 'blockly'

export default class Sensing {
  constructor () {
    // Draw the blocks
    Blockly.defineBlocksWithJsonArray(
      [
        {
          type: 'start_logging',
          message0: 'start logging',
          inputsInline: true,
          previousStatement: null,
          nextStatement: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'stop_logging',
          message0: 'stop logging',
          inputsInline: true,
          previousStatement: null,
          nextStatement: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_roll',
          message0: 'roll (°)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_pitch',
          message0: 'pitch (°)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_yaw',
          message0: 'yaw (°)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_speedx',
          message0: 'speed x (cm/s)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_speedy',
          message0: 'speed y (cm/s)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_speedz',
          message0: 'speed z (cm/s)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_templ',
          message0: 'low temp (°C)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_temph',
          message0: 'high temp (°C)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_tof',
          message0: 'tof (cm)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_height',
          message0: 'altitude (cm)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_battery',
          message0: 'battery (%)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_barometer',
          message0: 'barometer (cm)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_flight_time',
          message0: 'flight time (s)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_accelx',
          message0: 'acceleration x (cm/s²)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_accely',
          message0: 'acceleration y (cm/s²)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        },
        {
          type: 'get_accelz',
          message0: 'acceleration z (cm/s²)',
          output: null,
          style: 'sensing_blocks',
          tooltip: '',
          helpUrl: ''
        }

      ])

    // Generators
    Blockly.JavaScript.start_logging = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); startSensorLogging();`
      return code
    }

    Blockly.JavaScript.stop_logging = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); stopSensorLogging();`
      return code
    }

    Blockly.JavaScript.get_roll = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = 'drone.getState(\'roll\')'
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_pitch = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('pitch')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_yaw = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('yaw')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_speedx = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('vgx')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_speedy = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('vgy')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_speedz = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('vgz')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_templ = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('templ')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_temph = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('temph')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_tof = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('tof')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_height = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('h')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_battery = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('bat')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_barometer = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('baro')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_flight_time = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('time')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_accelx = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('agx')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_flight_time = function (block) {
      const blockId = encodeURIComponent(block.id)
      const code = `highlightBlock("${blockId}"); drone.getState('agy')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.JavaScript.get_flight_time = function (block) {
      const blockId = encodeURIComponent(block.id); y
      const code = `highlightBlock("${blockId}"); drone.getState('agz')`
      return [code, Blockly.JavaScript.ORDER_NONE]
    }
  }
}
