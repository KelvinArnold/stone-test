import React, { Component } from 'react';

class ProductRate extends Component {
  renderRate() {
    let count = 0;
    let stars = '';
    const {rate} = this.props;
    while (count < 5) {
      count++;
      if (count<=rate) {
        stars.concat(<i className="fas fa-star"></i>);
      }
      stars.concat(<i className="far fa-star"></i>);
    }
    console.log(stars);
    return stars;
  }
  render() {
    return (
      <div className="text-link mb-3">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    )
  }
}

export default  ProductRate;