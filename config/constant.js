import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const env1 = process.env.ENV;

export const BASE_URL = () => {
  console.log(publicRuntimeConfig.env);
  if (publicRuntimeConfig.env === "development") {
    return "http://localhost:5101/";
  }
  if (publicRuntimeConfig.env === "qa") {
    return "http://localhost:5101/";
  }
  return "http://localhost:5101/";
};

export const APP_URL = () => {
  if (publicRuntimeConfig.env === "development") {
    return "http://localhost:3000";
  }
  if (publicRuntimeConfig.env === "qa") {
    return "http://localhost:3000";
  }
  return "http://localhost:3000";
};



export const APP_CONFIG = {
  name: "om",
};

export const METHOD_TYPES = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const PATHS = {
  USER: {
    GET: "api/users",
    CREATE: "api/v1/cognito/register",
    AUTH: "api/v1/cognito/login",
  },
  TEMPLE: {
    GET_ALL: "api/v1/shopify/store/temples",
  },
  PRODUCTS: {
    GET_BY_ID: "api/v1/products",
  },
};

