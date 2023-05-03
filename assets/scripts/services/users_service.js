import { apiFetch, BASE_URL } from "./api_fetch.js";

// export const showUser = () =>
//   apiFetch(`${BASE_URL}/profile`, {
//     method: "GET",
//     headers: {
//       Authorization: `Token token=${sessionStorage.getItem("token")}`,
//     },
//   });

// export const updateUser = (email, first_name, last_name, phone) =>
//   apiFetch(`${BASE_URL}/profile`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token token=${sessionStorage.getItem("token")}`,
//     },
//     body: JSON.stringify({ email, first_name, last_name, phone }),
//   });
