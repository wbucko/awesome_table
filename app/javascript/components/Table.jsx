import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputGroup from './InputGroup'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 3,
      inputs: [{ text: '' }],
      name: '',
      rows: 2
    };
  }

  addColumn = () => {
    this.setState({ columns: this.state.columns + 1 })
  }

  removeColumn = () => {
    if (this.state.columns != 1) { this.setState({ columns: this.state.columns - 1 }) }
  }

  addRow = () => {
    this.setState({ rows: this.state.rows + 1 })
  }

  removeRow = () => {
    if (this.state.rows != 1) { this.setState({ rows: this.state.rows - 1 }) }
  }

  handleSubmit = () => {}

  render () {
    return (
      <div className='container table'>
        <div className='row justify-content-center'>
          <div className='col-md-10 jumbotron'>
            <div className='table--header'>
              <h3>Awesome Table</h3>
            </div>
            <hr className="my-4"></hr>
            <div>
              <p>
                Rows:
                <button onClick={this.addRow} className='btn btn-sm btn-info'>+1</button>
                <button onClick={this.removeRow} className='btn btn-sm btn-danger'>-1</button>
              </p>
              <p>
                Columns:
                <button onClick={this.addColumn} className='btn btn-sm btn-info'>+1</button>
                <button onClick={this.removeColumn} className='btn btn-sm btn-danger'>-1</button>
              </p>
            </div>
            <div className='table--form'>
              <form onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Table name'
                  required
                />
                <InputGroup columns={this.state.columns} rows={this.state.rows} />
                <div className='form-group table--email'>
                  <label htmlFor='email'>Send to</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email address'
                    required
                  />
                </div>
                <button type='submit' className='btn btn-light'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table
