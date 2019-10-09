module.exports = function multiply(first, second) {
  var firstArr = first.split('').reverse();
  var secondArr = second.split('').reverse();

  var result = [];

  for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
      var mult = firstArr[i] * secondArr[j];
      if (result[i + j])
      {
        result[i + j] = result[i + j] + mult;
      } else {
        result[i + j] = mult;
      }
      
    }
  }

  for (var i = 0; i < result.length; i++) {
    var num = result[i] % 10;
    var move = Math.floor(result[i] / 10);
    result[i] = num;

    if (result[i + 1])
      result[i + 1] += move;
    else if (move != 0)
      result[i + 1] = move;
  }


  return result.reverse().join('');
}
