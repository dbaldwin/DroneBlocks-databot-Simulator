class Utils {
  static radians_to_degrees (radians) {
    const pi = Math.PI
    return radians * (180 / pi)
  }
}

module.exports = Utils
