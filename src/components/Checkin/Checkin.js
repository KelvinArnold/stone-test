import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { cardMask, cpfMask, cardDateMask, cardCvvMask } from './../../helpers';
import { FormField } from './../FormField';

export default class Checkin extends Component {
  state = {
    shipping: 20,
    cep: '',
    address: '',
    address_number: ''
  }
  componentDidMount() {
    const {token} = this.props.match.params;
    console.log(token);
    this.props.fetchToken(token);
  }
  onSubmitForm(values) {
    const purchase = {
      cep: this.state.cep,
      address: this.state.address,
      addressNumber: this.state.address_number,
      cpf: values.cpf,
      cardNumber: values.card_number,
      cardName: values.card_name,
      cardValidate: values.card_validation,
      cardCvv: values.card_cvv,
      productId: this.props.purchase.token.productId,
      productTitle: this.props.purchase.token.productTitle,
      productPrice: this.props.purchase.token.productPrice,
      quantity: this.props.purchase.token.quantity
    };
    this.props.sendPruchase(purchase,
      () => this.props.history.push('/Success'),
      (e) => console.log(e));
  }
  onAddresChange() {
    this.setState({ address: 'Alameda dos apetupas - Planalto Paulista' });
  }
  someSubmitError() {
    const {purchase} = this.props;
    console.log(purchase);
  }
  renderProductDetail() {
    const {purchase} = this.props;
    return (
      <div className="col-12 mb-4">
        <h4 className="mb-3">Informações da compra</h4>
        <div className="media bg-light p-2 rounded">
          <img className="mr-3"
            src="https://picsum.photos/600/?random"
            width="100"
            alt="Generic placeholder"/>
          <div className="media-body">
            <h5>{purchase.token.productTitle}</h5>
            <p className="mb-0">Quantidade: {purchase.token.quantity}</p>
            <p className="mb-2">Preço unitario: R$ {purchase.token.productPrice}</p>
            <h4 className="text-primary">Total: R$ {purchase.token.productPrice * purchase.token.quantity}</h4>
          </div>
        </div>
      </div>
    )
  }
  renderDeliverySection() {
    return (
      <div className="col-12 col-md-6">
        <h4 className="mb-0">Dados de envio</h4>
        <small className="mb-2">Digite seu cep para calcular o preco de envio</small>
        <div className="form-row mb-3 mt-3">
          <div className="form-group col-12 col-sm-4 col-md-6">
            <input className="form-control"
              placeholder="Digite o cep"
              onChange={event => this.setState({ cep: event.target.value})}/>
          </div>
          <div className="form-group col-12 col-sm-3">
            <input className="form-control"
              placeholder="Número"
              onChange={event => this.setState({address_number: event.target.value})}/>
          </div>
          <div className="col-12">
            <button className="btn btn-sm btn-light text-link"
              onClick={this.onAddresChange.bind(this)}>Calcular frete</button>
          </div>
          {this.someSubmitError.bind(this)()}
        </div>
        {this.renderShipping.bind(this)()}
      </div>
    )
  }
  renderShipping() {
    if (this.state.address
      && this.state.address_number) {
      return (
        <div>
          <h4 className="mb-3">{this.state.address} {this.state.address_number}</h4>
          <h4 className="text-primary">Custo de envio <br></br> <strong>R$ {this.state.shipping}</strong></h4>
        </div>
      )
    }
  }
  renderField(field) {
    return <FormField field={field} />;
  }
  renderCheckinForm() {
    const {handleSubmit, purchase} = this.props;
    console.log(handleSubmit);
    return (
      <div className="col-12 col-md-6 border-left">
        <h4 className="mb-3">Dados de pagamento</h4>
        <form className="form" onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
          <strong className="text-link">Dados pessoais</strong>
          <Field
            name="cpf"
            label="CPF"
            placeholder="Digite seu cpf"
            {...cpfMask}
            component={this.renderField}/>
          <strong className="text-link">Dados do cartão de crédito</strong>
          <Field
            name="card_number"
            label="Numero do cartao"
            placeholder="Digite aqui"
            {...cardMask}
            component={this.renderField}/>
          <Field 
            name="card_name"
            label="Nome como está no cartão"
            placeholder="Degite aqui"
            component={this.renderField}/>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Field
                name="card_validation"
                label="Mês/Ano"
                placeholder="MM/AA"
                {...cardDateMask}
                component={this.renderField}/>
            </div>
            <div className="col-12 col-sm-6">
              <Field
                name="card_cvv"
                label="CVV"
                placeholder="CVV"
                {...cardCvvMask}
                component={this.renderField}/>
            </div>
          </div>
          <strong>Total pagar</strong>
          <small className="d-block mb-0">Frete: R$ {this.state.shipping}</small>
          <small className="d-block">Valor do produto: R$ {purchase.token.productPrice * purchase.token.quantity}</small>
          <h2>R$ {(purchase.token.productPrice * purchase.token.quantity) + this.state.shipping}</h2>
          <button
            className="btn btn-lg bc-link text-white mt-2"
            disabled={!this.state.address || !this.state.address_number ? true : false}>
            Pagar
          </button>
          <Link to={`/product/${purchase.token.productId}`}
            className="ml-2 btn btn-lg btn-white text-link">Cancelar</Link>
        </form>
      </div>
    )
  }
  render() {
    const {purchase} = this.props;
    if (!purchase.token) {
      return <div className="col-12">Loading...</div>
    }
    console.log(purchase);
    return (
      <div className="col-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-light">
            <li className="breadcrumb-item">
              <Link to="/">Lista de produtos</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/product/${purchase.token.productId}`}>{purchase.token.productTitle}</Link>
            </li>
            <li className="breadcrumb-item active">
              Checkin
            </li>
          </ol>
        </nav>
        <div className="row">
          {this.renderProductDetail.bind(this)()}
          {this.renderDeliverySection.bind(this)()}
          {this.renderCheckinForm.bind(this)()}
        </div>
      </div>
    )
  }
}
