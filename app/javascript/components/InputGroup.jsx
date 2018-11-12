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
                          name={inputId}
                          id={inputId}
                          className='form-control'
                          placeholder='Your text'
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
};

InputGroup.defaultProps = {
  columns: 3,
  rows: 2
};

export default InputGroup
