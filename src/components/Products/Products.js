import React, { Component } from 'react';
import { ProductList } from './../ProductList';
import { Search } from './../Search';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    console.log(this.props);
  }
  renderList() {
    const {products} = this.props;
    if (!products) {
      return <span>Loading...</span>
    }
    return <ProductList products={products}/>
  }
  render() {
    return (
      <div className="col-12 mt-3">
        <h2 className="mb-3">Lista de produtos</h2>
        <Search />
        {this.renderList()}
      </div>
    )
  }
}

export default Products;