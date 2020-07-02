import React, { useReducer } from 'react';
// import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    CLEAR_FILTER,
    FILTER_CONTACTS
} from '../types';


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name:'Sara Louis',
                email:'s@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 2,
                name:'ken Lou',
                email:'k@gmail.com',
                phone: '299-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name:'Tom Litman',
                email:'t@gmail.com',
                phone: '222-222-000',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = "id" + Math.random().toString(16).slice(2);
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    // Delete Contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id }) 
    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact })  
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})  
    }

    //Update Contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact })  
    }
    // Filter Contacts
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text })  
    }

    //Clear filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})  
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current, 
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
            >
                {props.children}
            </ContactContext.Provider>
    );
};

export default ContactState;