// 270p
function arraySet(array, idx, value) {
  var copy = array.slice()
  copy[idx] = value
  return copy
}

function push(array, elem) {
  var copy = array.slice()
  copy.push(elem)
  return copy
}

function drop_last(array) {
  var array_copy = array.slice()
  array_copy.pop()
  return array_copy
}

function drop_first(array) {
  var array_copy = array.slice()
  array_copy.shift()
  return array_copy
}
