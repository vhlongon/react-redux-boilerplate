import React from 'react';
import { Component } from 'react';

import ItemsList from '../containers/items-list';
import ItemDetail from '../containers/item-details';

// using inline images
//import {img} from '../../images/surf.jpg';

export default class App extends Component {
  render() {
    return (
      <div>
        <img className="image-test" />
        <h1>{this.props.title}</h1>
        <ItemsList />
        <ItemDetail />
      </div>
    );
  }
}
