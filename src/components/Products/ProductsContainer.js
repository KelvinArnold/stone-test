import { connect } from 'react-redux';
import { fetchProducts } from "./../../actions/action-product";
import Products from './Products';

const mapStateToProps = ({products}) => ({
  products
})

const ProductsContainer = connect(
  mapStateToProps,
  {fetchProducts}
)(Products)

export default ProductsContainer;
