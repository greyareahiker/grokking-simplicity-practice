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

function get_free_shipping_with_item(cart, item) {
  const new_cart = add_item(cart, item)
  return is_free_shipping(new_cart)
}

function set_free_shipping_icon(button, isFreeShipping) {
  if (isFreeShipping) button.show_free_shipping_icon() // DOM action
  else button.hide_free_shipping_icon() // DOM action
}

function update_shipping_icons(cart) {
  const buy_buttons = get_buy_buttons_dom() // DOM get
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    const isFreeShipping = get_free_shipping_with_item(cart, item)
    set_free_shipping_icon(button, isFreeShipping)
  }
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total)) // DOM action
}

// I
function make_cart_item(name, price) {
  return { name, price }
}

// util
function add_element_last(array, elem) {
  const new_array = array.slice()
  new_array.push(elem)
  return new_array
}

// C
function add_item(cart, item) {
  return add_element_last(cart, item)
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
