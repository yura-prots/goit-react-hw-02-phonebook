import { Component } from 'react';

import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';

import initialState from 'db/contacts.json';

class App extends Component {
  state = {
    contacts: initialState,
    name: '',
    number: '',
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactsForm />

        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
