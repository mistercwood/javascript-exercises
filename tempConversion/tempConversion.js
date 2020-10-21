const ftoc = function(f) {
  return ftocOut = Math.round(((f - 32) * (5 / 9)) * 10) / 10; 
}

const ctof = function(c) {
  return ctofOut = Math.round(((c * (9 / 5)) + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
