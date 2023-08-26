export const path = (paths = [], obj) => {
  let val = obj;
  let tempPath = paths; 
  if (typeof paths === 'string') {
    tempPath = paths.split('.');
  }
  for (let i = 0; i < tempPath.length; i++) {
    if (val === null) {
      return undefined;
    }

    val = val[tempPath[i]];
  }

  return val;
}


// import {applyMiddleware, createStore} from 'redux';
// import {middlewares} from './../createStore';
// import reducers from '../reducers';

// Create store for testing purposes
// export const testStore = (initialState) => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//   return createStoreWithMiddleware(reducers, intitialState);
// }