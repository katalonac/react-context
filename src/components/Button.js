import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // this adds a property to a Button class
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Potvrdi';
    return <button className='ui button primary'>{text}</button>;
  };
};
// We can add property on this way also
// Button.contextType = LanguageContext;

export default Button;