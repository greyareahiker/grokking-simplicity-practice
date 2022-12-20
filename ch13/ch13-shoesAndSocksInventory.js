// before
function shoesAndSocksInventory(products) {
  let inventory = 0
  for (let p = 0; p < products.length; p++) {
    const product = products[p]
    if (product.type === "shoes" || product.type === "socks") {
      inventory += product.numberInInventory
    }
  }
  return inventory
}

// after

// 1. 데이터 만들기
function shoesAndSocksInventory(products) {
  let inventory = 0

  const shoesAndSocks = products.filter(
    (product) => product.type === "shoes" || product.type === "socks"
  )
  for (let p = 0; p < shoesAndSocks.length; p++) {
    inventory += shoesAndSocks[p].numberInInventory
  }

  return inventory
}

// 2. 배열 전체를 다루기 & 3. 작은 단위로 나누기
function shoesAndSocksInventory(products) {
  const shoesAndSocks = products.filter(
    (product) => product.type === "shoes" || product.type === "socks"
  )

  return shoesAndSocks.reduce((prev, curr) => prev + curr, 0)
}
