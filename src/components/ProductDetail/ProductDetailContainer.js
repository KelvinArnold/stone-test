import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import { fetchProductId } from './../../actions/action-product';
import { createPurchaseToken } from './../../actions/action-purchase';

const mapStateToProps = ({products}, ownProps) => ({
  product: products[ownProps.match.params.id]
})

const ProductDetailContainer = connect(
  mapStateToProps,
  {fetchProductId, createPurchaseToken}
)(ProductDetail)

export default ProductDetailContainer;
