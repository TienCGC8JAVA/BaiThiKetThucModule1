let arr = [12, 6, 3, 7, 21, 5, 7];
let n = prompt("Nhập vào thứ tự phần tử muốn loại bỏ");

function  tryRemoveFromArray(arr) {
  this.arr = arr;
  for (let el in arr) {
    if (n === el) {
      arr.splice(n, 1);
    }
  }
  document.getElementById("demo").innerHTML = arr;
  return arr;
}

tryRemoveFromArray(arr);