const shopping_cart = []
let shopping_cart_total = 0

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price)
  calc_cart_total(shopping_cart)
}

function calc_cart_total(cart) {
  const total = calc_total(cart) // 오답노트: 암묵적 출력도 없앨 수 있으면 없애자
  set_cart_total_dom(total) // DOM action
  update_shipping_icons(cart)
  update_tax_dom(total)
}

function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom() // DOM get
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const new_cart = add_item(cart, item.name, item.price)
    if (is_free_shipping(new_cart))
      button.show_free_shipping_icon() // DOM action
    else button.hide_free_shipping_icon() // DOM action
  }
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total)) // DOM action
}

function add_item(cart, name, price) {
  const new_cart = cart.slice()
  new_cart.push({
    name: name,
    price: price,
  })
  return new_cart
}

function is_free_shipping(cart) {
  return calc_total(cart) >= 20
}
function calc_tax(total) {
  return total * 0.1
}

function calc_total(cart) {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    total += item.price
  }
  return total
}
