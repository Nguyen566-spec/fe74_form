import { DELETE, SUBMIT } from "./type";

export const actionDelete = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

export const actionSubmit = (payload) => {
  return {
    type: SUBMIT,
    payload,
  }
}
