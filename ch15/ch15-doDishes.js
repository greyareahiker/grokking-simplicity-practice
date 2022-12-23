/**
 * const plates = ...;
 * const forks = ...;
 * const cups = ...;
 */

function doDishes(plates, forks, cups, cb) {
  const total = 0
  wash_ajax(plates, function () {
    total += plates.length
    wash_ajax(forks, function () {
      total += forks.length
      wash_ajax(cups, function () {
        total += cups.length
        cb(total)
      })
    })
  })
}

doDishes(plates, forks, cups, update_dishes_dom)
