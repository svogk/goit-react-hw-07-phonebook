import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from 'redux/phonebook-operations';
import { getContacts } from 'redux/phonebook-selectors';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onAddContact = newContact =>
    dispatch(phonebookActions.addNewContact(newContact));

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isValidateForm = validateForm(name, number);
    if (!isValidateForm) {
      reset();
      return;
    }
    onAddContact({ id: uuidv4(), name, number });
    reset();
  };

  const onCheckContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    if (isExistContact) {
      alert('Контакт с таким именем уже существует!');
    }
    return !isExistContact;
  };

  const validateForm = (name, number) => {
    if (!name.trim() || !number.trim()) {
      alert('Для добавления контакта заполните поля Name и Number');
      return false;
    }
    return onCheckContact(name);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            placeholder="Введите имя контакта"
            onChange={handleChange}
            autoFocus
          />
        </label>
        <label htmlFor="">
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            placeholder="Введите номер контакта"
            onChange={handleChange}
          />
        </label>
        <button>Add contact</button>
      </form>
    </div>
  );
}

export default ContactForm;
