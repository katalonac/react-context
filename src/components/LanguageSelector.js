import React from 'react';
import LangageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LangageContext;

  render() {
    return (
      <div>
          Select a language:
          <i 
            className='flag us' 
            onClick={() => this.context.onLanguageChange('english', 'red')} 
          />
          <i 
            className='flag rs' 
            onClick={() => this.context.onLanguageChange('serbian', 'blue')} 
          />
        </div>
    );
  };
}

export default LanguageSelector;