import React from 'react';
import ZipForm from './ZipForm.js';

class App extends React.Component {

  onFormSubmit(zipcode){
    this.setState({ zipcode });
  }

  render() {
    return <div class = "app" >
              <ZipForm />
           </div > ;
  }
}

export default App;
