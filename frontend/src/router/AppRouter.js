// Dependencies
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// Components
import Customers from '../components/Customers';
import Navbar from '../components/layout/Navbar';
import Home from '../components/Home';
import Reports from '../components/Reports';
import CreateCustomer from '../components/CreateCustomer';
import Customer from '../components/Customer';

export default class AppRouter extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/home" component={Home} exact />
                    <Route path="/customers" component={Customers} exact />
                    <Route path="/customers/:id" component={Customer} exact />
                    <Route path="/reports" component={Reports} exact />
                    <Route path="/create-customer" component={CreateCustomer} exact />
                </Switch>
            </>
        );
    }
}
