import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const FOODS_URL = BASE_URL + '/api/foods';
export const FOODS_TAGS_URL = FOODS_URL + '/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
export const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
export const FOODS_BY_ID_URL = FOODS_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';



export const Restaurants_URL  = BASE_URL + 'api/Restaurants';
// export const Restaurants_TAGS_URL = Restaurants_URL + '/tags';
export const Restaurants_BY_SEARCH_URL = Restaurants_URL + '/search/';
// export const Restaurants_BY_TAG_URL = Restaurants_URL + '/tag/';
export const Restaurants_BY_ID_URL  = Restaurants_URL + '/';