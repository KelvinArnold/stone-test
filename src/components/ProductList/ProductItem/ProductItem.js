import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    const {product} = this.props;
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3">
        <Link to={`/product/${product._id}`} className="card">
          <img className="card-img-top"
            src={product.picture.preview}
            alt={product.title}
            height="300"
            />
          <div className="card-body">
            <h6 className="card-title">{product.title}</h6>
            <h2 className="card-text">R$ {product.price}</h2>
            <p className="mb-0 text-primary">
              <i className="fas fa-truck mr-2"></i>
              <small className="font-italic">Frete gratis</small>
            </p>
            <p className="">
              <i className="text-primary far fa-credit-card mr-2"></i>
              <small className="font-italic">
                12 parcelas de <span>R${parseInt(product.price / 12)}</span> sem juros
              </small>
            </p>  
          </div>
        </Link>
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string
  })
}

export default ProductItem;