import { createReducer } from '../utils';
import { SET_PRISTINE, DISMISS_TOAST } from '../actions';

/* eslint object-curly-newline: 0 */
const setPristine = (state, { payload: { data } }) => ({
  data,
});

const removeUiId = (state, { payload: { uiId } }) => ({
  data: state.data.filter(item => item.uiId !== uiId)
});

export default createReducer(
  { data: [] },
  {
    [SET_PRISTINE]: setPristine,
    [DISMISS_TOAST]: removeUiId,
  },
);
