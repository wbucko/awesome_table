import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import InputGroup from './InputGroup'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 3,
      email: '',
      inputs: {'0,0': ''},
      name: '',
      rows: 2
    };
  }

  addColumn = () => {
    this.setState({ columns: this.state.columns + 1 })
  }

  addRow = () => {
    this.setState({ rows: this.state.rows + 1 })
  }

  removeColumn = () => {
    if (this.state.columns != 1) {
      let inputs = this.state.inputs
      const columns = this.state.columns - 1
      for (let i = 0; i < this.state.rows; i++) {
        delete inputs[`${i},${columns}`]
      }
      this.setState({ columns: columns, inputs: inputs })
    }
  }

  removeRow = () => {
    if (this.state.rows != 1) {
      let inputs = this.state.inputs
      const rows = this.state.rows - 1
      for (let i = 0; i < this.state.columns; i++) {
        delete inputs[`${rows},${i}`]
      }
      this.setState({ rows: rows, inputs: inputs })
    }
  }

  handleChange = (e) => {
    if (['name', 'email'].includes(e.target.id) ) {
      this.setState({ [e.target.id]: e.target.value })
    } else {
      let inputs = this.state.inputs
      inputs[e.target.id] = e.target.value
      this.setState({ inputs: inputs })
    }
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/v1/create', this.state)
      .then(response => {
        console.log(response)
        window.location.reload()
      })
      .catch(error => {
        alert(error)
      })
  }

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
                <button onClick={this.removeRow} className='btn btn-sm btn-danger'>-1</button>
                <button onClick={this.addRow} className='btn btn-sm btn-info'>+1</button>
              </p>
              <p>
                Columns:
                <button onClick={this.removeColumn} className='btn btn-sm btn-danger'>-1</button>
                <button onClick={this.addColumn} className='btn btn-sm btn-info'>+1</button>
              </p>
            </div>
            <div className='table--form'>
              <form onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Table name'
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                />
                <InputGroup
                  columns={this.state.columns}
                  rows={this.state.rows}
                  inputs={this.state.inputs}
                  handleChange={this.handleChange}
                />
                <div className='form-group table--email'>
                  <label htmlFor='email'>Send to</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email address'
                    onChange={this.handleChange}
                    value={this.state.email}
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
