import React, { Component } from 'react';
import Header from './layout/Header';
import { gql } from 'apollo-boost';
import client from '../apolloClient';

class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customer_id: this.props.match.params.id,
            customer_name: ''
        }
    }

    async componentDidMount () {
        const variables = {
            id: this.state.customer_id*1
        }
        const customer = await client.query({
            query: gql`
                query findUser($id: Int!) { 
                    customer (id: $id) {
                    id
                    name
                    visits
                    }
                }
            `, variables
        });

        this.setState({
            customer_name: customer.data.customer.name
        })
    }

    render() {
        return (
            <div className="main">
                <Header title={`Visits of customer "${this.state.customer_name}"`} />
            </div>
        );
    }
}

export default Customer;