let i = 1;

try {
  i = i * j;
} catch (e) {
  console.error(e.message);
} finally {
  console.log('end');
}
