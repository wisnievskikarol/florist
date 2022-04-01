class TokenUtils {
  getToken = () => {
    const tokenItem = JSON.parse(localStorage.getItem("tokenData"));
    return tokenItem;
  };

  setToken = (data) => {
    localStorage.setItem("tokenData", JSON.stringify(data));
  };

  clearToken = () => {
    localStorage.removeItem("tokenData");
  };
}

const tokenUtils = new TokenUtils();

export default tokenUtils;
