import { apiFetch, BASE_URL } from "./api_fetch.js";

export const listContacts = () =>
  apiFetch(`${BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

export const createContact = (name) =>
  apiFetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name }),
  });

export const deleteContact = (contactId) =>
  apiFetch(`${BASE_URL}/contacts/${contactId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });
export const updateContact = (contactId, name, phone, email, relation) =>
  apiFetch(`${BASE_URL}/contacts/${contactId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, phone, email, relation }),
  });

