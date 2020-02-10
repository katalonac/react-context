import React from 'react';
import LangageContext  from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LangageContext;

  render() {
    return (
      <div className='ui field'>
        <label className={`ui ${this.context.color} ribbon label`}>
          {this.context.language === 'english' ? 'Name' : 'Ime'} 
          :
          </label>
        <input />
      </div>
    );
  };
};

export default Field;