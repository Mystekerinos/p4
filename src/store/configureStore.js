import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../Reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    /*'getName', 'items'*/
  ],
};

const pReducer = persistReducer(persistConfig, combineReducers);

export default function configureStore(initialState) {
  return createStore(
    pReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

export const store = configureStore();
export const persistor = persistStore(store);
