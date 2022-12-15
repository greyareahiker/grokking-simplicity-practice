// 270p
function withArrayCopy(array, modify) {
  const copy = array.slice()
  modify(copy)
  return copy
}

function arraySet(array, idx, value) {
  return withArrayCopy(array, (copy) => {
    copy[idx] = value
  })
}

function push(array, elem) {
  return withArrayCopy(array, (copy) => {
    copy.push(elem)
  })
}

function drop_last(array) {
  return withArrayCopy(array, (copy) => {
    copy.pop()
  })
}

function drop_first(array) {
  return withArrayCopy(array, (copy) => {
    copy.shift()
  })
}
