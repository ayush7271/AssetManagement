import { call, put, takeEvery, takeLatest } from "redux-saga/effects";


const callAPI = async ({ url, method, data, headers }) => {
  return await Axios({
    url,
    method,
    data,
    headers,
  });
};
const BASE_URI = "";    //for base url


function* saga() {

}

export default saga;