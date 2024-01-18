import { Component } from 'react';

import ContactsList from 'components/ContactsList';

import initialState from 'db/contacts.json';

class App extends Component {
  state = {
    contacts: initialState,
    name: '',
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h2>Contacts</h2>

        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
