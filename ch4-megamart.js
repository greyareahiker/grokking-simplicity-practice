const shopping_cart = []
let shopping_cart_total = 0

// 60p
function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price)
  calc_cart_total()
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart)
  set_cart_total_dom() // DOM action
  update_shipping_icons()
  update_tax_dom()
}

// 61p 무료 배송비 계산
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom() // DOM get
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    if (is_free_shipping(item.price, shopping_cart_total))
      button.show_free_shipping_icon() // DOM action
    else button.hide_free_shipping_icon() // DOM action
  }
}

// 62p 세금 계산
function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total)) // DOM action
}

function add_item(cart, name, price) {
  const new_cart = cart.slice()
  new_cart.push({
    name: name,
    price: price,
  })
  return new_cart
}

function is_free_shipping(item_price, total) {
  return item_price + total >= 20
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
