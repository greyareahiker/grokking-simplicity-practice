function remove_item_by_name(cart, name) {
  let idx = null
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i
  }
  if (idx !== null) cart.splice(idx, 1)
}
