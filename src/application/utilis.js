import decode from "jwt-decode";

export const checkTokenValidity = (token) => {
  const expirationDate = decode(token).exp;
  const isExpired = expirationDate * 1000 < new Date().getTime();
  return isExpired;
};

export const getUserInitials = (firstName) => {
  if (!firstName) {
    return "";
  }
  const userName = `${firstName.charAt(0)}`;
  return userName.toUpperCase();
};

export const isUserAdmin = (userData) => {
  return userData?.role?.includes("admin"); 
};
