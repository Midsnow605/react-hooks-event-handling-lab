import React from 'react';

class Keypad extends React.Component {
  handlePasswordChange = () => {
    console.log('Entering password...');
  };

  render() {
    return (
      <input type="password" onChange={this.handlePasswordChange} />
    );
  }
}

export default Keypad;
