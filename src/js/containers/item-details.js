import React from 'react';
import { connect } from 'react-redux';

export const ItemDetails = ({activeItem}) => {
  const {title, type} = activeItem;
  if(!(title && type)) {
    return <div>Select an Item to get started.</div>;
  } else {
    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {title}</div>
        <div>Pages: {type}</div>
      </div>
    );
  }
}

ItemDetails.propTypes = {
  activeItem: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    activeItem: state.activeItem
  };
}

export default connect(mapStateToProps)(ItemDetails);
