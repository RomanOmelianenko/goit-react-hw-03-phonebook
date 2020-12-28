import React from "react";
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";

function ContactList({ contacts, onRemoveContact }) {

    return (
        <ul
            className={styles.TaskList}>
            {contacts.map((contact) => (
                <li
                    className={styles.TaskList_item}
                    key={contact.id}>
                    {contact.name}: {contact.number}
                    {
                        <button
                            className={styles.TaskList_button}
                            type="button"
                            name="delete"
                            onClick={() => onRemoveContact(contact.id)}
                        >
                            delete
              </button>
                    }
                </li>
            ))};
        </ul>
    );
    
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
    })),
}

export default ContactList;