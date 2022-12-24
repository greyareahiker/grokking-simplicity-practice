/**
 * page 447~466
 * 큐 만들어 사용해보기
 */

function add_item_to_cart(item) {
  cart = add_item(cart, item)
  update_total_queue(cart)
}

function calc_cart_total(cart, callback) {
  const total = 0
  cost_ajax(cart, (cost) => {
    total += cost
    shipping_ajax(cart, (shipping) => {
      total += shipping
      callback(total)
    })
  })
}

const queue_items = []

function runNext() {
  const cart = queue_items.shift()
  calc_cart_total(cart, update_total_dom)
}

function update_total_queue(cart) {
  queue_items.push(cart)
  setTimeout(runNext, 0)
}
