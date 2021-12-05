const debounce = (func: Function, wait: number) => {
  let timeout: any;
  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};
export default debounce;
