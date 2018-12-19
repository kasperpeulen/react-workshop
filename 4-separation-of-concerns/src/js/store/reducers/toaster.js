import { createReducer } from '../utils';
import {
  SET_PRISTINE,
  DISMISS_TOAST, DISMISS_ALL_TOAST
} from "../actions";

/* eslint object-curly-newline: 0 */
const setPristine = (state, { payload: { data } } ) => ({
  data,
});

const removeArrayItemById = (array, uiId) => array.filter((item) => item.uiId !== uiId);

const onDismissToast = (state, { uiId }) => {
  const data = removeArrayItemById(state.data, uiId);
  return Object.assign({}, state, { data });
};

const dismissAllToast = (state, { uiId }) => {
  return Object.assign({}, state, { data: [] });
};

export default createReducer({ data: [] }, {
  [SET_PRISTINE]: setPristine,
  [DISMISS_TOAST]: onDismissToast,
  [DISMISS_ALL_TOAST]: dismissAllToast,
});
