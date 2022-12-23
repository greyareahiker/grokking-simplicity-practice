/**
 * const plates = ...;
 * const forks = ...;
 * const cups = ...;
 * const total = ...;
 */

function doDishes() {
  total = 0
  wash_ajax(plates, function () {
    total += plates.length
    wash_ajax(forks, function () {
      total += forks.length
      wash_ajax(cups, function () {
        total += cups.length
        update_dishes_dom(total)
      })
    })
  })
}

doDishes()
