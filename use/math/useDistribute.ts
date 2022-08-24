export function useEvenlyDistribute(n: number, min = 0, max = 1) {
  const res = [];
  let i = 0;
  while (i < n) {
    res.push(min + ((i * (max - min)) / (n + 1)));
    i += 1;
  }
  return res;
}
