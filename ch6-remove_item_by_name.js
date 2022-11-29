function remove_item_by_name(cart, name) {
  let idx = null
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i
  }
  if (idx !== null) cart.splice(idx, 1)
}

// step1 복사본 만들기
function remove_item_by_name(cart, name) {
  const new_cart = cart.slice()
  let idx = null
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i
  }
  if (idx !== null) cart.splice(idx, 1)
}

// step2 복사본 변경하기 -> 기존 cart 를 사용하는 부분을 복사본으로 변경
function remove_item_by_name(cart, name) {
  const new_cart = cart.slice()
  let idx = null
  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) idx = i
  }
  if (idx !== null) new_cart.splice(idx, 1)
}

// step3 복사본 리턴하기
function remove_item_by_name(cart, name) {
  const new_cart = cart.slice()
  let idx = null
  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) idx = i
  }
  if (idx !== null) new_cart.splice(idx, 1)
  return new_cart
}

// 추가: 일반화하기(util)
function removeItems(array, idx, count) {
  const copyArray = array.slice()
  copyArray.splice(idx, count)
  return copyArray
}

function remove_item_by_name(cart, name) {
  let idx = null
  for (let i = 0; i < new_cart.length; i++) {
    if (cart[i].name === name) idx = i
  }
  if (idx !== null) return removeItems(cart, idx, 1)
  return cart
}
