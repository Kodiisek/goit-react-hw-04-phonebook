import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} handleDeleteContact={handleDeleteContact} />
      ))}
    </ul>
  );
}

export default ContactList;
