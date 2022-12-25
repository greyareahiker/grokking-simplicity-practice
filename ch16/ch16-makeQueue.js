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

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, (total) => {
    update_total_dom(total)
    done(total)
  })
}

function Queue(worker) {
  const queue_items = []
  let working = false

  function runNext() {
    if (working) return
    if (queue_items.length === 0) return
    working = true
    const item = queue_items.shift()

    worker(item.data, (val) => {
      working = false
      setTimeout(item.callback, 0, val) //
      runNext()
    })
  }

  return (data, callback) => {
    queue_items.push({
      data,
      callback: callback || function () {},
    })
    setTimeout(runNext, 0)
  }
}

const update_total_queue = new Queue(calc_cart_worker)
