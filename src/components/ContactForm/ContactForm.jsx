import React from 'react';
import styles from './ContactForm.module.css'

const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.phoneLabel}>
        Name
        <input className={styles.phoneInput} type="text" name="name" value={name} onChange={handleChange} required />
      </label>
      <br />
      <label className={styles.phoneLabel}>
        Number
        <input className={styles.phoneInput} type="tel" name="number" value={number} onChange={handleChange} required />
      </label>
      <br />
      <button className={styles.addButton} type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
