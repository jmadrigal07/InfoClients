import React, { Component } from 'react';
import Header from './layout/Header';
import { gql } from 'apollo-boost';
import client from '../apolloClient';
import TableHead from './table/TableHead';
import TableBody from './table/TableBody';
import { Link } from 'react-router-dom';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

    async componentDidMount() {
        const customers = await client.query({
            query: gql`
                { 
                    customers {
                        id
                        name
                        credit_limit
                        address
                        credit_limit
                        available_credit
                        visits_percentage
                        createdAt
                        updatedAt
                        city
                    }
                }
            `
        });
        this.setState({
            customers: customers.data.customers
        })
    }
    render() {
        return (
            <div className="main">
                <Header title="Customer list" />

                <table className="table">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map( (c, key) => {
                                return <TableBody
                                        key={key}
                                        id={c.id || ''}
                                        name={c.name || ''}
                                        address={c.address || ''}
                                        credit_limit={c.credit_limit || ''}
                                        available_credit={c.available_credit || ''}
                                        visits_percentage={c.visits_percentage || ''}
                                        createdAt={c.createdAt || ''}
                                        updatedAt={c.updatedAt || ''}
                                        city={c.city || ''}
                                        />
                            })
                        }
                    </tbody>
                </table>
                <Link to="/create-customer">
                    <button className="btn btn-primary">
                        Create new customer
                    </button>
                </Link>
            </div>
        );
    }
}

export default Customers;