const data = ['hoge1', 'hoge2', 'hoge3', 'hoge4', 'hoge5'];
const result = data.map((value, index, array) => {
  return value === 'hoge3';
});

if (result) {
  console.log('hoge3');
} else {
  console.log('other');
}
