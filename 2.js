function halfTriangle (height, direction) {
  // your code here
  let result=[];
  if (height<4) {
  	return 'minimum height is 4';
  }
  if (direction=='up') {
 	 for (let i=0;i<height;i++) {
 	 	let temp=[];
 	 	for (let j=0;j<height;j++){
 	 		if (j>=i) {
 	 			temp.push(j+1);
 	 		}
 	 		else {
  				temp.push(' ');
  			}
  		}
  		result.push(temp);
  	}
  }
  else if (direction=='down') {
  	for (let i=0;i<height;i++) {
 	 	let temp=[];
 	 	for (let j=0;j<height;j++){
 	 		if (j<=i) {
 	 			temp.push(j+1);
 	 		}
 	 		else {
  				temp.push(' ');
  			}
  		}
  		result.push(temp);
  	}
  }
  return result;
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
