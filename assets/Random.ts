function Random() {
  const maxLimit = 504;
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}
export default Random;
