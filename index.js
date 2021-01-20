class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z '-]/g, '')
  }
  static titleize(string) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(" ").map((word, i) => smallWords.includes(word) && i !== 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }
}