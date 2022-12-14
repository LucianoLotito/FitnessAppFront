import axios from "axios";

export const ApiService = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
// authClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     if (
//       error.response &&
//       [401, 419].includes(error.response.status) &&
//       store.getters["auth/authUser"] &&
//       !store.getters["auth/guest"]
//     ) {
//       store.dispatch("auth/logout");
//     }
//     return Promise.reject(error);
//   }
// );
