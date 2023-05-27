import React from 'react';
import { Provider} from 'react-redux';
import './App.css'
import Display from "./components/Display";
import Form from "./Store/Form";
import store from "./Store/store";


function App() {
    return (
        <Provider store={store}>
            <div>
                <Form />
                <Display />
            </div>
        </Provider>
    );
}

export default App;