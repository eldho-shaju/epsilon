export const setToLocalStorage = (key, value) => {
  if (typeof window !== "undefined")
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  if (typeof window !== "undefined") return localStorage.getItem(key);
};
