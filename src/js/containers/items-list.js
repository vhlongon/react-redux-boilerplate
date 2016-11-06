import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItem} from '../actions/index';

export class ItemsList extends Component {

  renderList = () => {
    return this.props.items.map((item) => {
        return (
          <li
            key={item.title}
            onClick={() => this.props.selectItem(item)}
            >
            <span>title: {item.title}; </span>
            <span>type: {item.type}</span>
          </li>
        );
    });

  }

  render = () => {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

// USED FOR BINDING REDUCERS
function mapStateToProps(state) {
  return {
    items: state.items
  };
}


// Promote Component from a normal React component to a container -
// this glue together the react view to the redux state object
// it needs to know about this new dispatch method, selectItem. Make it available as a prop
export default connect(mapStateToProps, {selectItem})(ItemsList);
