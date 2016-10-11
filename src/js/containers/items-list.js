import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItem} from 'actions/index';
import {bindActionCreators} from 'redux';

class ItemsList extends Component {

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


// USED FOR BINDING ACTIONS
// Anything returned from this function will end up as props on the Component container
function mapDispatchToProps(dispatch) {
  //Whwenever selectItem is called, the result should be passed to all of our reducers
  return bindActionCreators({selectItem: selectItem}, dispatch);
}

// Promote Component from a normal React component to a container -
// this glue together the react view to the redux state object
// it needs to know about this new dispatch method, selectItem. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
