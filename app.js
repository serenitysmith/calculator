function add() {
    const add1 = parseInt(document.getElementById('add1').value);
    const add2 = parseInt(document.getElementById("add2").value);
    const sum = add1 + add2;
    document.getElementById("add").innerHTML = `Sum: ${sum}`;
  document.getElementById('add1').value = ""
  document.getElementById('add2').value = ""
}
document.getElementById('adden').addEventListener('click', add)

function subtract() {
    const sub1 = parseInt(document.getElementById('sub1').value);
    const sub2 = parseInt(document.getElementById('sub2').value);
    const difference = sub1 - sub2;
    document.getElementById("subtrac").innerHTML = `Difference: ${difference}`;
  document.getElementById('sub1').value = ""
  document.getElementById('sub2').value = ""
}
document.getElementById('sub').addEventListener('click', subtract)

function times() {
    const mult1 = parseInt(document.getElementById('mult1').value);
    const mult2 = parseInt(document.getElementById('mult2').value);
    const product = mult1 * mult2;
    document.getElementById("mult").innerHTML = `Product: ${product}`;
  document.getElementById('mult1').value = ""
  document.getElementById('mult2').value = ""
}
document.getElementById("multi").addEventListener('click', times)