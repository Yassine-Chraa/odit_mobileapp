export const range = (n: number) => {
  const ret = Array(n);

  for (let i = 0; i < ret.length; i++) {
    ret[i] = i + 1;
  }
  return ret;
};
