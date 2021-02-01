import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from 'redux/phonebook-operations';
import { getVisibleContact } from '../../redux/phonebook-selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(getVisibleContact);

  const dispatch = useDispatch();

  const onDelete = id => dispatch(phonebookActions.deleteContact(id));

  useEffect(() => {
    const fetchContacts = () => dispatch(phonebookActions.fetchContacts());
    fetchContacts();
  }, [dispatch]);

  if (contacts.length === 0) return null;

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default ContactList;
