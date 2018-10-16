import { connect } from 'react-redux';
import Checkin from './Checkin';
import { reduxForm } from 'redux-form';
import { fetchToken, sendPruchase } from './../../actions/action-purchase';
import validate from './../../validates/validate-checkin';

const mapStateToProps = ({purchase}) => {
  return {
    purchase
  }
}

const CheckinContainer = connect(
  mapStateToProps,
  {fetchToken, sendPruchase}
)(Checkin);

export default reduxForm({form: 'checkinForm', validate})(CheckinContainer);
