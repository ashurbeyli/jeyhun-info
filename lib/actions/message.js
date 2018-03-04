import { SET_MESSAGE } from '../types/message';

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    message
  };
};