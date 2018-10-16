import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductRate } from './../ProductRate';

class ProductDetail extends Component {
  state = {
    quantity: 1
  }
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchProductId(id);
  }
  buyNow() {
    const {product} = this.props;
    this.props.createPurchaseToken({
      product_id: product._id,
      product_title: product.title,
      product_price: product.price,
      quantity: this.state.quantity
    }, (token) => this.props.history.push(`/checkin/${token}`));
  }
  render() {
    const {product} = this.props;
    if (!product) {
      return <div>Loading...</div>
    }
    return (
      <div className="col-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-light">
            <li className="breadcrumb-item">
              <Link to="/">Lista de produtos</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>
        {/* Product Detail */}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 border-right">
            <img className="mr-3 img-fluid"
              src={product.picture.preview}
              alt={product.title}/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-8">
            <h3 className="mt-0">{product.title}</h3>
            <ProductRate rate={product.rate}/>
            <h1 className="mt-3 mb-3">R$ {product.price}</h1>
            <p className="">
              <i className="text-primary far fa-credit-card mr-2"></i>
              <small className="font-italic">
                12 parcelas de <span>R${parseInt(product.price / 12)}</span> sem juros
              </small>
            </p>
            <p className="mb-4 text-grey">{product.description}</p>
            <p className="mb-4 text-primary">
              <i className="fas fa-truck mr-2"></i>
              <small>Frete gratis</small>
            </p>
            <p className="mb-4">
              Quantidade <span className="ml-2 btn btn-sm btn-light text-link">1 Unidade <i className="fas fa-caret-down"></i> </span>
            </p>
            <button
              className="btn btn-lg btn-primary"
              onClick={this.buyNow.bind(this)}>
              Comprar agora
            </button>
            {/* <Link to={`/checkin/${this.props.match.params.id}`}
              className="btn btn-lg btn-primary">
              Comprar agora
            </Link> */}
            <Link to="/" className="btn btn-lg btn-white">Voltar</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail;