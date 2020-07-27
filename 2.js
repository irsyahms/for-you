function halfTriangle (height, direction) {
  // your code here
  if (height < 4) {
    return 'Minimum height is 4'
  }

  let final = []

  switch (direction) {
    case 'up': {
      for (let i = 0; i < height; i++) {
        let j = 0
        let row = []
        for (; j < i; j++) {
          row.push(' ')
        }
        for (let k = j + 1; k <= height; k++) {
          row.push(`${k}`)
        }
        final.push(row)
      }
      return final
    }

    case 'down': {
      for (let i = 1; i <= height; i++) {
        let row = []
        let j = 1
        for (; j <= i; j++) {
          row.push(`${j}`)
        }
        for (let k = height - j; k >= 0; k--) {
          row.push(' ')
        }
        final.push(row)
      }
      return final
    }
  }
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
