import React, { Component } from 'react';
import {Cell} from 'fixed-data-table-2';

class VCELL extends Component {
  constructor(props){
    super(props);
    }
  render() {
    const columnKey= this.props
    return (
      <Cell>
          {columnKey} &nbsp;&nbsp;&nbsp;
      </Cell>
    );
  }
}

export default VCELL;
