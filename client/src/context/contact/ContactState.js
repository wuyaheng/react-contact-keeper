import React, { useReducer } from 'react';
// import {v4 as uuid} from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
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
        current: null
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

    //Clear filter


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current, 
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent
            }}
            >
                {props.children}
            </ContactContext.Provider>
    );
};

export default ContactState;