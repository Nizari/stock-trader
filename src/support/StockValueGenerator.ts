export const generateStockPrice = () => {
  // can be more complex but for now this is fine for me
  return +(Math.random() * 250).toFixed(2);
};
