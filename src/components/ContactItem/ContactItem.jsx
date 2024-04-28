import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, handleDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <ul className={styles.nameUl}>
    <li className={styles.itemLi}>
      {name}: {number}
      <button className={styles.deletebtn} onClick={() => handleDeleteContact(id)}>Delete</button>
      </li>
    </ul>
  );
}

export default ContactItem;
