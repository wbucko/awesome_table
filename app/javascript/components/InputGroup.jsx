import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputGroup extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {
          [...Array(this.props.rows)].map((er, ir) => {
            let rowId = `row-${ir}`
            return (
              <div key={rowId} className='form-row'>
                {
                  [...Array(this.props.columns)].map((ec, ic) => {
                    let inputId = `${ir},${ic}`
                    return (
                      <div key={inputId} className='col'>
                        <input
                          type='text'
                          id={inputId}
                          className='form-control'
                          placeholder='Your text'
                          onChange={this.props.handleChange}
                          value={this.props.inputs[inputId]}
                          required
                        />
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

InputGroup.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  inputs: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputGroup
