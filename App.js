import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigation from "./src/screens/Navigation";
import favouriteReducer from './redux/reducers/FavouriteReducer';
import ToastManager from 'toastify-react-native'

const store = createStore(favouriteReducer);

export default function App() {

    return(
        <Provider store={store}>
            <ToastManager />
            <Navigation/>
        </Provider>
    )
}
