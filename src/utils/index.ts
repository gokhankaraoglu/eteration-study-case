export const setLocalStorage = <U>(key: string, value: U): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }
  return null;
};
