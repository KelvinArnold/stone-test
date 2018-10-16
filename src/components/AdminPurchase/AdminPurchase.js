import _ from "lodash";
import React, { Component } from 'react';

class AdminPurchase extends Component {
  componentDidMount() {
    this.props.fetchPurchase();
  }
  renderTable() {
    const {purchases} = this.props;
    if (!purchases) {
      return <span>Loadng...</span>
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          { _.map(purchases, (purch, index) => {
            return (
              <tr key={purch._id}>
                <th>{index}</th>
                <td>{purch.productTitle}</td>
                <td>{purch.quantity}</td>
              </tr>
            )
          }) }
        </tbody>
      </table>
    )
  }
  render() {
    return (
      <div className="col-12">
        <h4 className="mb-3">Relatorio de vendas</h4>
        {this.renderTable.bind(this)()}
      </div>
    )
  }
}

export default AdminPurchase;