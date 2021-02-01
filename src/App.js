import React from 'react';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
