import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';

import initialState from 'db/contacts.json';

class App extends Component {
  state = {
    contacts: initialState,
    name: '',
    phone: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            ...newContact,
            id: nanoid(),
          },
        ],
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactsForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
