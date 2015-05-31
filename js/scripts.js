var pingPong = function(num) {
  var nums = [];
  for (i = 1; i <= num; i++) {
    if ((i % 3) === 0 && (i % 5) === 0) {
      nums.push("ping-pong");
    } else if ((i % 3) === 0) {
      nums.push("ping");
    } else if ((i % 5) === 0) {
      nums.push("pong");
    } else {
      nums.push(i);
    }
  }
  return nums;
};


$(function() {
  var num = prompt("What number?");
  results = pingPong(num);
  results.forEach(function(number){
    $("ul").append("<li>" + number + "</li>");
  });

});
