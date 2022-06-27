
class Drone {
  constructor () {
    this.isFlying = false
    console.log('constructor')
  }

  sendCommand (command) {
    window.unityInstance.SendMessage('DroneSimulationManager', 'ExecuteBlocklySession', '{"levelCode": 1, "levelSpawnID": 1,"droneCommandString":"' + command + '","_droneModel": {"_droneStyle": 0,"trailColorString": "#FFFF00", "_trailwidth": 0.025}}');
  }

  takeoff () {
    this.sendCommand('takeoff')
    this.isFlying = true
  }

  land () {
    this.sendCommand('land')
    this.isFlying = false
  }
}

module.exports = Drone
