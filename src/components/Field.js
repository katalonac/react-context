import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Field extends React.Component {
  // Getting context object from Consumer component
  // static contextType = LanguageContext;
  renderSubmit(value) {
    return value === 'english' ? 'Name' : 'Ime';
  }

  renderColor(color) {
    return color === 'red' ? 'red' : 'blue';
  }

  render() {
    // const text = this.context === 'english' ? 'Name' : 'Ime';

    return (
      <div className='ui field'>
        <ColorContext.Consumer>
          {(color) => 
            <label className={`ui ${this.renderColor(color)} ribbon label`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          :
          </label>
          }
        </ColorContext.Consumer>
        <input />
      </div>
    );
  };
};

export default Field;