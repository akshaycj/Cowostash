import { notification } from "antd";
import cookie from "react-cookies";

export default class Utils {
  setSessionToken(key, value) {
    sessionStorage.setItem(key, value);
    //window.location.href = "/dashboard";
  }

  validateToken(key) {
    if (sessionStorage.getItem(key) || cookie.load(key)) {
      return true;
    } else {
      return false;
    }
  }

  clearStorage() {
    sessionStorage.removeItem("JWTToken");
    sessionStorage.removeItem("comapanyId");
    sessionStorage.removeItem("userId");
    cookie.remove("JWTToken");
    window.location.href = "/login";
  }

  getToken() {
    const token = sessionStorage.getItem("JWTToken") || cookie.load("JWTToken");
    return token;
  }

  setCookie(key, value) {
    cookie.save(key, value);
  }

  Unauthorized(status) {
    if (status === 401) {
      sessionStorage.removeItem("JWTToken");
      cookie.remove("JWTToken");
      window.location.href = "/login";
    }
  }

  setSession(key, value) {
    sessionStorage.setItem(key, value);
  }

  getSession(key) {
    return sessionStorage.getItem(key);
  }

  validateIncludePaths(path) {
    if (path === "/" && this.validateToken("JWTToken")) {
      return false;
    } else {
      let includePaths = "";
      includePaths = [
        "/",
        "/login",
        "/forgot_password",
        "/companies",
        "/users/password/edit"
      ];
      return includePaths.indexOf(path) > -1;
    }
  }

  emailValidation(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  displayNotification(description, message, type) {
    notification.config({
      placement: "topRight",
      top: 70
    });
    notification[type]({
      description,
      message
    });
  }

  getCompanyId() {
    const companyId =
      sessionStorage.getItem("comapnyId") || cookie.load("comapnyId");
    return companyId;
  }

  getUserId() {
    const userId = sessionStorage.getItem("userId") || cookie.load("userId");
    return userId;
  }

  getUrlParams(url) {
    const params = {};
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      params[key] = value;
    });
    return params;
  }
}
