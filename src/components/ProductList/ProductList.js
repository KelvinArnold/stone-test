import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ProductItem } from './ProductItem';

class ProductList extends Component {
  renderProduct() {
    const {products} = this.props;
    if (!Object.keys(products).length) {
      return (
        <div className="col-12">
          <span>Naão existem produtos cadastrados :(</span>
        </div>
      )
    }
    console.log(products);
    return _.map(products, product => {
      return <ProductItem
        product={product}
        key={product._id}/>
    })
  }
  render() {
    return (
      <div className="row">
        {this.renderProduct()}
      </div>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.object
}

export default ProductList;
