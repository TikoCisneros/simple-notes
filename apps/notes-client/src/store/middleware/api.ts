/**
 * https://patrickdesjardins.com/blog/how-to-create-a-typed-redux-middleware-in-typescript
 * https://www.programcreek.com/typescript/?api=redux.Middleware
 * https://www.smashingmagazine.com/2023/05/guide-redux-toolkit-typescript/
 * https://blog.logrocket.com/using-typescript-redux-toolkit/
 */

import { AnyAction, Dispatch, Middleware } from '@reduxjs/toolkit';
import { fetchHttp } from '../actions/api';

const apiMiddleware: Middleware =
  ({ dispatch }) =>
  (next: Dispatch<AnyAction>) =>
  async (action: AnyAction) => {
    const { type } = action;
    if (type !== fetchHttp.type) {
      next(action);
      return;
    }

    // TODO: Add api behavior
    dispatch(action);
  };

export default apiMiddleware;
