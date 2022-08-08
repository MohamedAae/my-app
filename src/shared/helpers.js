export const Helpers = {
  getToken: () => {
    const checkLocalStorage =
      localStorage.getItem("loggedInUser") ||
      sessionStorage.getItem("loggedInUser");
    if (checkLocalStorage) {
      const user = JSON.parse(checkLocalStorage);
      return user.token;
    }
  },
};
