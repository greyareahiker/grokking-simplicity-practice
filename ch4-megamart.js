const shopping_cart = []
let shopping_cart_total = 0

// 60p
function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price,
  })
  calc_cart_total()
}

// 61p 무료 배송비 계산
function update_shipping_icons() {
  const buy_buttons = get_buy_buttons_dom() // DOM get
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon() // DOM action
    else button.hide_free_shipping_icon() // DOM action
  }
}

// 62p 세금 계산
function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1) // DOM action
}

function calc_cart_total() {
  calc_total()
  set_cart_total_dom() // DOM action
  update_shipping_icons()
  update_tax_dom()
}

function calc_total() {
  shopping_cart_total = 0
  for (let i = 0; i < shopping_cart.length; i++) {
    const item = shopping_cart[i]
    shopping_cart_total += item.price
  }
}
