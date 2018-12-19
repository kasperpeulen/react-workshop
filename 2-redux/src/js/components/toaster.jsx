import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dismissToast } from '../store/actions';
import PropTypes from 'prop-types';
import Toast from './toast';
import Alert from './alert';

const Toaster = ({ toaster, actions }) => (
  <div className="toast  toast--bottom">
    { toaster.data.map((item) => (
      <Toast key={item.uiId}>
        <Alert {...item} onDismiss={() => actions.dismissToast(item.uiId)}/>
      </Toast>
    ))}
  </div>
);

/* eslint object-curly-newline: 0 */
Toaster.propTypes = {
  actions: PropTypes.shape({
    dismissToast: PropTypes.func.isRequired,
  }).isRequired,
  toaster: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      uiId: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default connect(
  ({ toaster }) => ({ // map state to props
    toaster,
  }),
  (dispatch) => ({ // map dispatch to props
    actions: bindActionCreators({ dismissToast }, dispatch),
  }),
)(Toaster);

