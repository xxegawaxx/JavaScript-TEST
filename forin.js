const data = { hoge1: 150, hoge2: 200, hoge3: 300 };

for (const key in data) {
  console.log(`${key} = ${data[key]}`);
  console.log(`${data[key]}`);
}
