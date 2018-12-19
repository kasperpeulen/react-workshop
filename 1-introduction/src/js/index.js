import React from 'react';
import PropTypes from 'prop-types';
import Toast from './components/toast';
import Alert from './components/alert';

class Toaster extends React.Component {
  constructor(props) {
    super(props);

    this.onDismissToast = this.onDismissToast.bind(this);

    this.state = {
      data: this.props.data,
    };
  }

  onDismissToast(uiId) {
    this.setState((state) => {
      return {data: state.data.filter(item => item.uiId !== uiId)}
    });
  }

  render() {
    const {data} = this.state;
    return (
      <div className="toast toast--bottom">
        {data.map(item => (
          <Toast key={item.uiId}>
            <Alert {...item} onDismiss={() => this.onDismissToast(item.uiId)} />
          </Toast>
        ))}
      </div>
    );
  }
}

Toaster.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uiId: PropTypes.string.isRequired,
  })).isRequired,
};

export default Toaster;
