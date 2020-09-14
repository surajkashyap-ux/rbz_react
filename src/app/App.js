import '@fake-db'
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import Layout from 'Layouts';
import {Router} from 'react-router-dom';
import jssExtend from 'jss-extend';
import history from '@history';
import AppContext from './AppContext';
import {create} from 'jss';
import {StylesProvider, jssPreset, createGenerateClassName} from '@material-ui/styles';

const jss = create({
    ...jssPreset(),
    plugins       : [...jssPreset().plugins, jssExtend()],
    insertionPoint: document.getElementById('jss-insertion-point'),
});

const generateClassName = createGenerateClassName();

const App = () => {
    return (
        <AppContext.Provider
            value={{
                routes
            }}
        >
            <StylesProvider jss={jss} generateClassName={generateClassName}>
                        <Router history={history}>
                                    <Layout/>
                        </Router>
            </StylesProvider>
        </AppContext.Provider>
    );
};

export default App;
