import React, { Component } from 'react';

class NoteItem extends Component {
  render() {
    return <div>{this.props.content}</div>
  }
}

export default NoteItem;