import React from 'react';

class ZipForm extends React.Component{
  constructor(props){
    super(props);
  this.state = {
    zipcode: ''
  }

  this.inputUpdated = this.inputUpdated.bind(this);
  this.submitZipCode = this.submitZipCode.bind(this);
}

submitZipCode(e){
  const { onSubmit } = this.props;

  onSubmit(e.target.value);
}

  render(){
    return (
      <div className="zip-form">
        <form onSubmit={this.submitZipCode}>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            className="form-control"
            type="input"
            name="zipcode"
            value={this.state.zipcode}
            onInput={this.inputUpdated}/>
          <button type="submit" className='btn btn-success'>Get the forecast!!</button>
        </form>
      </div>
    );
  }
}


export default ZipForm;
