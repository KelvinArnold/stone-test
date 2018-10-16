import { connect } from 'react-redux';
import AdminPurchase from './AdminPurchase';
import { fetchPurchase } from './../../actions/action-purchase';

const mapStateToProps = ({purchase}) => ({
  purchases: purchase.list
})

const AdminPurchaseContainer = connect(
  mapStateToProps,
  {fetchPurchase}
)(AdminPurchase);

export default AdminPurchaseContainer;
