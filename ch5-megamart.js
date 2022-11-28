const shopping_cart = []
let shopping_cart_total = 0

function add_item_to_cart(name, price) {
  const new_item = make_cart_item(name, price)
  shopping_cart = add_item(shopping_cart, new_item)
  const total = calc_total(shopping_cart) // 오답노트: 암묵적 출력도 없앨 수 있으면 없애자
  set_cart_total_dom(total) // DOM action
  update_shipping_icons(shopping_cart)
  update_tax_dom(total)
}

function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom() // DOM get
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    const new_cart = add_item(cart, item)
    if (is_free_shipping(new_cart))
      button.show_free_shipping_icon() // DOM action
    else button.hide_free_shipping_icon() // DOM action
  }
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total)) // DOM action
}

// I
function make_cart_item(name, price) {
  return { name, price }
}

// C
function add_item(cart, item) {
  const new_cart = cart.slice()
  new_cart.push(item)
  return new_cart
}
// C I B
function calc_total(cart) {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    total += item.price
  }
  return total
}

// B
function is_free_shipping(cart) {
  return calc_total(cart) >= 20
}

// B
function calc_tax(total) {
  return total * 0.1
}
