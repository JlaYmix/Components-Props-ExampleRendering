import UserCard from './components/UserCard';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Мій додаток</h1>
        <UserCard id="1" name="" gender="male" />
        <UserCard id="2" name="Антон" gender="male" />
        <UserCard id="3" name="Марія" gender="female" />
        <UserCard id="4" name="Гість" gender="other" />
        </div>
    )
  }
}

export default App;