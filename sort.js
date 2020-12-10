const data = [5, 30, 33, 11, 6];

console.log(data.sort());
console.log(
  data.sort((x, y) => {
    return x - y;
  })
);
