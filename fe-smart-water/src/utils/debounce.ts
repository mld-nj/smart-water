let timeout: any;
const debounce = (func: Function, wait: number) => {
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
