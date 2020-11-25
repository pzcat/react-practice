import React, {Component, Fragment} from 'react';
import './style.css'
import NoteItem from './NoteItem';

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
  }

  render() {
    return (
      <Fragment>
        <h1>Jsx</h1>
        <div>
          <label htmlFor="insertArea">Input your note here:</label>
          <textarea
            id="insertArea"
            className="textarea"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>add note</button>
        </div>

        <ul>
          {
            this.state.list.map((item, index) => {
              return <NoteItem content={item} />      // pass item in map to defined attribute content                     //<li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>

      </Fragment>

    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    // this.state.inputValue = e.target.value;
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],   // ...this.state.list put the origin content into the new list here
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const l_delete = [...this.state.list];
    l_delete.splice(index, 1);
    this.setState({
      list: l_delete
    })
  }
}

export default LearnJsx;