export const Storage = {
  setStorage(USER_KEY, user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  getStorage(USER_KEY) {
    return JSON.parse(localStorage.getItem(USER_KEY)) || "{}";
  },
  removeStorage(USER_KEY) {
    localStorage.removeItem(USER_KEY);
  },
};
