import { apiFetch, BASE_URL } from "./api_fetch.js";

export const listContacts = () =>
  apiFetch(`${BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

export const createContact = (contact) =>
  apiFetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(contact),
  });

export const deleteContact = (contactId) =>
  apiFetch(`${BASE_URL}/contacts/${contactId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });
  export const showContact = (idContact) =>
  apiFetch(`${BASE_URL}/contacts/${idContact}`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

