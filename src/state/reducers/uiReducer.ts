import { UIType } from "../action-types/uiActionTypes";
import { UIState } from "../../types/common-interface";
import { Actions } from "../actions/uiActions";

const INITIAL_STATE: UIState = {
  showForm: false,
  showModal: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: Actions): UIState => {
  switch (action.type) {
    case UIType.FORM:
      return { ...state, showForm: !state.showForm };
    case UIType.MODAL:
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
};
