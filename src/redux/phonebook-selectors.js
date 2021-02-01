import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebookContacts.contacts;

export const getFilter = state => state.phonebookContacts.filter;

export const getVisibleContact = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
