const logger = (destination) => (store) => (next) => (action) => {
  console.log(`logging to the ${destination} by Liedji.`);
  next(action);
};

export default logger;
