import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault();
        console.log("Going to store");
    }
    render() {
        return  (
        <React.Fragment>
          <form className="store-selector" onSubmit={this.goToStore}>
             <h2>please enter A store</h2>
             <input 
             type="text" 
             required 
             placeholder="Store NAme"
             defaultValue={getFunName()}
             />
             <button type="submit">Visit Store </button>
        </form>
        </React.Fragment>
        );
    }
}

export default StorePicker;