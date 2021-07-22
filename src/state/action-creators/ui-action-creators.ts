import { UIType } from "../action-types/uiActionTypes";

export const formAction = () => {
  return { type: UIType.FORM };
};

export const modalAction = () => {
  return { type: UIType.MODAL };
};
