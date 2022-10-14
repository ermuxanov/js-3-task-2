let count = +prompt("Введите количество ступени:");
let res;

for (let i = 0; i < count; i++) {
  res = "";
  for (let j = 0; j < i; j++) {
    res = res + "=";
  }
  console.log(res + "*");
}
