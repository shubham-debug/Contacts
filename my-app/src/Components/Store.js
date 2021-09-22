import {createStore} from 'redux';

const contacts = [
    {
        "fname" : "Shubham",
        "lname" : "kumar",
        "org" : "TCS",
        "mail" : "xyz@abc.com",
        "ph" : "9876543210",
        "id" : '1'
    },
    {
        "fname" : "Gaurav",
        "lname" : "kumar",
        "org" : "TCS",
        "mail" : "xyz@abc.com",
        "ph" : "9876543220",
        "id" : '2'
    },  
    
]

// Reducer
const contactReducer = (state = {contacts : contacts}, action) => {
    if(action.type === 'delete'){
        const newId = action.id.id;
        const newContact = state.contacts.filter(contact => contact.id !== newId);
        return {
            contacts : newContact,
        };
    }
    if(action.type === 'Add'){
        const newContact = state.contacts.map(contact => contact);
        newContact.push(action.newContact);
        return {
            contacts : newContact,
        }
    }
    return state;

};

//Store
const store = createStore(contactReducer);


export default store;