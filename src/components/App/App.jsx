import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';

import initialState from 'db/contacts.json';

class App extends Component {
  state = {
    contacts: initialState,
    name: '',
    phone: '',
    filter: '',
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

  findContact = searchQuery => {
    this.setState({ filter: searchQuery });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactsForm onAdd={this.addContact} />

        <h2>Contacts</h2>

        <p>Find contact by name</p>
        <ContactsFilter filter={filter} toFind={this.findContact} />

        <ContactsList contacts={visibleContactsList} />
      </div>
    );
  }
}

export default App;
