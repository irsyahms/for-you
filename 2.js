function halfTriangle (height, direction) {
  // your code here
  let result = []

  if (height < 4){
    return `Minimum height is 4`
  }

  for (let i = 0; i < height; i++){
    result.push([])
    let j = 0

    if (direction == 'down'){
      for ( ; j < i + 1; j++){
        result[i].push(j+1)
      }
      for ( ; j < height; j++){
        result[i].push(' ')
      }
    }else if (direction == 'up'){
      for ( ; j < i; j++){
        result[i].push(' ')
      }
      for ( ; j < height; j++){
        result[i].push(j+1)
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
