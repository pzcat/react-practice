import React, {Component, Fragment} from 'react';
import NoteItem from './NoteItem';
import './style.css'


class LearnJsx extends Component {

  constructor(props) {
    super(props); // inherit constructor method
    this.state = {
      inputValue: 'note',
      list: ['We need to import React to compile jsx.',
        'The name of a component should be capitalized.',
        'All the element of a component should be wrapped in the only component.',
        'We could import Fragment, instead of a real element, to wrap the elements.',
      ]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnAdd = this.handleBtnAdd.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <h1>Jsx</h1>
        <div>
          <label htmlFor="insertArea">Input your note here:</label><br/>
          <textarea
            id="insertArea"
            className="textarea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnAdd}>add note</button>
        </div>

        <ul>
          {/*{*/}
          {/*  // pass item in map to defined attribute content*/}
          {/*  this.state.list.map((item, index) => {*/}
          {/*    return <NoteItem*/}
          {/*      content={item}*/}
          {/*      index={index}*/}
          {/*      deleteItem={this.handleItemDelete}*/}
          {/*    />*/}
          {/*  })*/}
          {/*}*/}
          {this.getNoteItem()}
        </ul>

      </Fragment>

    )
  }

  getNoteItem() {
    return this.state.list.map((item, index) => {
      return (<NoteItem
        content={item}
        index={index}
        deleteItem={this.handleItemDelete}
      />)
    })
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));

  }

  handleBtnAdd() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],   // ...this.state.list put the origin content into the new list here
    //   inputValue: ''
    // })
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],   // ...this.state.list put the origin content into the new list here
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    // const l_delete = [...this.state.list];
    // l_delete.splice(index, 1);
    // this.setState({
    //   list: l_delete
    // })
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    });
  }
}

export default LearnJsx;