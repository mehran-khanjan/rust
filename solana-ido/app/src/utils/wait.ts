export const wait = (delay: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
