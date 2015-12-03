var input = [6,3,5,4,3,4,4,5]

var result =[]
// Iterate through array. Start at 2nd item. End at last item.
for (var i = 1; i < input.length; i++) {
  var current = input[i]
  var prev = input[i-1]
  // Case 1 : current > prev
  if (current > prev)
    result.push('up')
  // Case 2 : current == prev
  if (current === prev)
    result.push('even')
  // Case 1 : current < prev
  if (current < prev)
    result.push('down')
}

console.log(result)
