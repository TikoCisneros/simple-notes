import { AnyAction, Dispatch, Middleware } from '@reduxjs/toolkit';
import { fetchHttp } from '../actions/api';

const apiMiddleware: Middleware =
  (_store) => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const { type } = action;
    if (type !== fetchHttp.type) {
      next(action);
      return;
    }

    // TODO: Add api behavior
  };

export default apiMiddleware;
