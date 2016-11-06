import React, {Component} from 'react';
import {connect} from 'react-redux';

export const ItemDetails = (props) => {
  if(!props.activeItem) {
    return <div>Select an Item to get started.</div>;
  } else {
    const {title, type} = props.activeItem;
    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {title}</div>
        <div>Pages: {type}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeItem: state.activeItem
  };
}

export default connect(mapStateToProps)(ItemDetails);
