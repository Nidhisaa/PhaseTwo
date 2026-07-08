const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function totalSum() {
	const a = Number(num1.value);
	const b = Number(num2.value);
	result.textContent = a + b;
}
