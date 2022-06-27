import Blockly from 'blockly/core'

const defaultBlockStyles = {
  takeoff_blocks: {
    colourPrimary: '#3a86ff'
  },
  navigation_blocks: {
    colourPrimary: '#8338ec'
  },
  flip_blocks: {
    colourPrimary: '#ff006e'
  },
  land_blocks: {
    colourPrimary: '#fb5607'
  },
  land_blocks: {
    colourPrimary: '#fb5607'
  },
  camera_blocks: {
    colourPrimary: '#ffc6ff'
  },
  sensing_blocks: {
    colourPrimary: '#a0c4ff'
  },
  colour_blocks: {
    colourPrimary: '#bdb2ff'
  },
  list_blocks: {
    colourPrimary: '#9b5de5'
  },
  logic_blocks: {
    colourPrimary: '#4ecdc4'
  },
  loop_blocks: {
    colourPrimary: '#00bbf9'
  },
  math_blocks: {
    colourPrimary: '#ffd166'
  },
  procedure_blocks: {
    colourPrimary: '#0d3b66'
  },
  text_blocks: {
    colourPrimary: '#f15bb5'
  },
  variable_blocks: {
    colourPrimary: '#08979d'
  },
  variable_dynamic_blocks: {
    colourPrimary: '#FF0000'
  }
}

const categoryStyles = {
  colour_category: {
    colour: '#bdb2ff'
  },
  list_category: {
    colour: '#9b5de5'
  },
  logic_category: {
    colour: '#4ecdc4'
  },
  loop_category: {
    colour: '#00bbf9'
  },
  math_category: {
    colour: '#ffd166'
  },
  procedure_category: {
    colour: '#0d3b66'
  },
  text_category: {
    colour: '#f15bb5'
  },
  variable_category: {
    colour: '#08979d'
  },
  variable_dynamic_category: {
    colour: '#0000FF'
  }
}

export default Blockly.Theme.defineTheme('droneblocks', {
  blockStyles: defaultBlockStyles,
  categoryStyles,
  componentStyles: {},
  fontStyle: {},
  startHats: null
})
