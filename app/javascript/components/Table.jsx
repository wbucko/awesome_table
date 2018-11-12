import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 2,
      columns: 3
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
                Rows: {this.state.rows}
                <button onClick = {this.addRow}>+1</button>
                <button onClick = {this.removeRow}>-1</button>
              </p>
              <p>
                Columns: {this.state.columns}
                <button onClick = {this.addColumn}>+1</button>
                <button onClick = {this.removeColumn}>-1</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table
