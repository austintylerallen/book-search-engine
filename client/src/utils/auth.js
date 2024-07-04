// client/src/utils/auth.js

export const getToken = () => {
    return localStorage.getItem('id_token');
  };
  
  export const setToken = (token) => {
    localStorage.setItem('id_token', token);
  };
  
  export const removeToken = () => {
    localStorage.removeItem('id_token');
  };
  
  export const loggedIn = () => {
    const token = getToken();
    return !!token;
  };
  
  export const logout = () => {
    removeToken();
    window.location.assign('/');
  };
  
  export default {
    getToken,
    setToken,
    removeToken,
    loggedIn,
    logout,
  };
  