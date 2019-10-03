import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';

import './index.scss';

render(
    <Router>
        <AppRouter />
    </Router>,
    document.getElementById('root')
);
