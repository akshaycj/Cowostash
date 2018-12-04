import Util from "./index";

const Utils = new Util();

export const AUTH = "Bearer " + Utils.getToken();

export const BASE_URL = "http://cowostash-staging-app.herokuapp.com/";

export const BASE_URL_COMP =
  BASE_URL + "dashboard/companies/" + Utils.getCompanyId();
