import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';

import initialState from 'db/contacts.json';

class App extends Component {
  state = {
    contacts: initialState,
    filter: '',
  };

  addContact = newContact => {
    const isDuplicate = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

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

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactsForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <ContactsFilter toFind={this.findContact} />
        <ContactsList
          contacts={visibleContacts}
          toDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
