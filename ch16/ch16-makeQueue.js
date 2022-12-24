/**
 * page 447~466
 * 큐 만들어 사용해보기
 */

function add_item_to_cart(item) {
  cart = add_item(cart, item)
  calc_cart_total(cart, update_total_dom)
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
