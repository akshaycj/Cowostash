import Util from "./index";

const Utils = new Util();

export const AUTH = "Bearer " + Utils.getToken();

export const BASE_URL = "https://cowostash-staging-app.herokuapp.com/";
