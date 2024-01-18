import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <input type="text" name="name" required />
        <button>Add contact</button>

        <h2>Contacts</h2>
        <ul>
          <li>Rose Simpson</li>
        </ul>
      </div>
    );
  }
}

export default App;
