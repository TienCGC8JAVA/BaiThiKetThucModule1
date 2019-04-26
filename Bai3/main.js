let n;

function checkInteger() {
  do {
    n = Number(prompt("Nhập vào một số nguyên lớn hơn 0"));
  } while (n < 0)
}

function isPrime() {
  let Prime = true;
  if (n === 2 || n === 3) {
    Prime = true;
  }
  for (let i = 2; i < n/2; i++) {
    if (n % i === 0) {
      Prime = false;
    }
  }
  if (Prime) {
    document.getElementById("demo").innerHTML = n + " là số nguyên tố!";
  } else {
    document.getElementById("demo").innerHTML = n + " không phải là số nguyên tố!"
  }
}

checkInteger();
isPrime();