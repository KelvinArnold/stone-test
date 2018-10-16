import React, { Component } from 'react';
import { AdminProduct } from './../AdminProduct';
import { AdminPurchase } from './../AdminPurchase';

class Admin extends Component {
  state = {
    layout: 'product'
  }
  renderLayout() {
    if (this.state.layout === 'product') {
      return <AdminProduct/>
    } else {
      return <AdminPurchase/>
    }
  }
  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12 mb-3">
            <h2>Dash de adminitração</h2>
          </div>
          <div className="col-12 col-sm-4 col-md-3">
            <ul className="list-group">
              <li className={`list-group-item list-group-item-action ${this.state.layout === 'product'?'text-primary':''}`}
                onClick={() => this.setState({layout: 'product'})}>
                Adicionar Produto
              </li>
              <li className={`list-group-item list-group-item-action ${this.state.layout === 'purchase'?'text-primary':''}`}
                onClick={() => this.setState({layout: 'purchase'})}>
                Compras
              </li>
            </ul>
          </div>
          <div className="col border-left">
            {this.renderLayout.bind(this)()}
          </div>
        </div>
      </div>
    )
  }
}

export default Admin;