import { UIType } from "../action-types/uiActionTypes";

interface formAction {
  type: UIType.FORM;
}
interface modalAction {
  type: UIType.MODAL;
}

export type Actions = formAction | modalAction;
