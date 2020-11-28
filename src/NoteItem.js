import React, { Component } from 'react';

class NoteItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);    // "this" in handleClick always refers to NoteItem
  }

  render() {
    // return <div><li>{this.props.content}</li><button onClick={this.handleClick}>delete</button></div>
    const { content } = this.props;
    return <div><li>{content}</li><button onClick={this.handleClick}>delete</button></div>
  }

  handleClick() {
    // this.props.deleteItem(this.props.index)
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

export default NoteItem;