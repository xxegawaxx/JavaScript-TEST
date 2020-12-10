const data = ['hoge1', 'hoge2', 'hoge3', 'hoge4', 'hoge5'];
const result = data.map((value, index, array) => {
  console.log(index);
  console.log(array);
  return value + 'map';
});

console.log(result);
console.log(data);
