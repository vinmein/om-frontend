import helpers from '../helpers/APIHelper';
import { METHOD_TYPES, PATHS } from '../../config/constant';

export function getTemples() {
  return helpers.callApi(METHOD_TYPES.GET, PATHS.TEMPLE.GET_ALL, {}, {});
}

export function getProducts(alias) {
  const url = PATHS.PRODUCTS.GET_BY_ID+`/${alias}`
  return helpers.callApi(METHOD_TYPES.GET, url, {}, {});
}
