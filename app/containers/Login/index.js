import { connect } from 'react-redux';
import { compose } from 'redux';
import Container from './Container';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = state => {
  return {
    ...state
  };
} 

const withConnect = connect(mapStateToProps, mapDispatchToProps, withRouter);
export default compose(withConnect)(Container);
export { mapDispatchToProps };
