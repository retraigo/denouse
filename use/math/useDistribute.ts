export function useEvenlyDistribute(n: number, min = 0, max = 1) {
  const res = [];
  let i = 0;
  do {
    res.push(min + ((i * (max - min)) / (n + 1)));
    i += 1;
  } while (i < n)
  return res;
}
