import ServiceKeyPressControls from '../../services/service-key-press-controls';
import { compose } from 'redux';
import { dismissAllToast } from "../actions";

const keyPressControlEnhancer = ({ store }) => {
  const dispatchActions = compose(
    () => store.dispatch(dismissAllToast()), // action
  );

  ServiceKeyPressControls.observable.addListener('onkeypressescape', dispatchActions);
};

export default keyPressControlEnhancer;
