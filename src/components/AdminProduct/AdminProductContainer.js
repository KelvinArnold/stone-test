import { connect } from 'react-redux';
import AdminProduct from './AdminProduct';
import { createProduct } from './../../actions/action-product';
import { reduxForm } from 'redux-form';
import validate from './../../validates/validate-product';

const AdminProductContainer = connect(
  null,
  {createProduct}
)(AdminProduct);

export default reduxForm({form: 'productForm', validate})(AdminProductContainer);
