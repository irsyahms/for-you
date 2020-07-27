function halfTriangle (height, direction) {
  if (height < 4) {
    return "Minimum height is 4"
  }
  let result = []
  for (let i = 0; i < height; i++) {
    result[i] = []
    for (let j = 0; j < height; j++) {
      result[i].push("")
    }
  }
  // console.log(result)
  if (direction == "down") {
    // console.log('down')
    for (let x = height-1; x >= 0; x--) {
      for (let y = x; y >= 0; y--) {
        result[x][y] = y+1
      }
    }
  }
  if (direction == "up") {
    // console.log('up')
    for (let x = 0; x < height; x++) {
      for (let y = x; y < height; y++) {
        result[x][y] = y+1
      }
    }
  }
  return result
}

console.log(halfTriangle(5, 'up'))
// [ [ '1', '2', '3', '4', '5' ],
//   [ ' ', '2', '3', '4', '5' ],
//   [ ' ', ' ', '3', '4', '5' ],
//   [ ' ', ' ', ' ', '4', '5' ],
//   [ ' ', ' ', ' ', ' ', '5' ] ]

console.log(halfTriangle(7, 'down'))
// [ [ '1', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', ' ', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', '3', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', '3', '4', ' ', ' ', ' ' ],
//   [ '1', '2', '3', '4', '5', ' ', ' ' ],
//   [ '1', '2', '3', '4', '5', '6', ' ' ],
//   [ '1', '2', '3', '4', '5', '6', '7' ] ]

console.log(halfTriangle(3, 'up')) // Minimum height is 4

console.log(halfTriangle(4, 'up'))
// [ [ '1', '2', '3', '4' ],
//   [ ' ', '2', '3', '4' ],
//   [ ' ', ' ', '3', '4' ],
//   [ ' ', ' ', ' ', '4' ] ]

console.log(halfTriangle(4, 'down'))
// [ [ '1', ' ', ' ', ' ' ],
//   [ '1', '2', ' ', ' ' ],
//   [ '1', '2', '3', ' ' ],
//   [ '1', '2', '3', '4' ] ]
