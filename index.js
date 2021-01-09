// Code your solutions in this file
function writeCards(arr, name) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`);
  }
  return new_arr;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
