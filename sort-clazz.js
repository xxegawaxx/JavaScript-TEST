const clazz = ['hoge1', 'hoge6', 'hoge3'];

const members = [
  { name: 'foo', clazz: 'hoge3' },
  { name: 'foo12', clazz: 'hoge1' },
  { name: 'foo2', clazz: 'hoge6' },
];

console.log(
  members.sort((x, y) => {
    return clazz.indexOf(x.clazz) - clazz.indexOf(y.clazz);
  })
);
