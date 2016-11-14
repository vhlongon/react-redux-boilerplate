import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItem} from '../actions/index';

export class ItemsList extends Component {

  renderList = () => {
    return this.props.items.map( (item) => {
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
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

ItemsList.propTypes = {
  items: React.PropTypes.array,
  selectItem: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps, {selectItem})(ItemsList);
