for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    let k = i * j;
    if (k > 30) {
      break;
    }
    console.log(k);
  }
}
