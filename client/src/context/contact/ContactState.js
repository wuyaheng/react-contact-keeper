import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS, 
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Phoebe Yaheng Wu',
                email: 'wuyaheng2016@gmail.com',
                phone: '123-456-7890',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Caroline',
                email: 'caroline2016@gmail.com',
                phone: '333-456-7890',
                type: 'personal'
            },
            {
                id: 3,
                name: 'David Wu',
                email: 'david2016@gmail.com',
                phone: '000-456-7890',
                type: 'personal'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
          value={{
              contacts: state.contacts
          }}
          >
          (props.children)
          </ContactContext.Provider>
    )
}