import React, { Component } from 'react';
import Header from './layout/Header';
import client from '../apolloClient';
import { gql } from 'apollo-boost';

class CreateCustomer extends Component {
    constructor(){
        super();
        this.state = {
            cities: [],
            messageCreatedUser: '',
            showMessage: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        const cities = await client.query({
            query: gql`
                {
                    cities {
                        id
                        name
                    }
                }
            `
        });

        this.setState({
            cities: cities.data.cities
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('newCustomerName').value;
        const address = document.getElementById('newCustomerAddress').value;
        const credit_limit = document.getElementById('newCustomerCreditLimit').value * 1;
        const available_credit = document.getElementById('newCustomerCreditAvailable').value * 1;
        const visits_percentage = document.getElementById('newCustomerPercentageVisit').value * 1;
        const cityId = document.getElementById('newCustomerCity').value * 1;
        const variables = { data: {
                name,
                address,
                credit_limit,
                available_credit,
                visits_percentage,
                cityId
            }
        };
        
        const userCreated = await client.mutate({
            mutation: gql`
                mutation addCustomer($data: Customer!) {
                    createCustomer(input: $data) {
                        id
                        name
                        credit_limit
                        available_credit
                    }
                }
            `, variables
        })
        if (userCreated) {
            this.setState({
                messageCreatedUser: 'User created',
                showMessage: !this.state.showMessage
            })
        }
        return userCreated;
    }

    render() {
        return (
            <div className="main">
            <Header title="Create customer" />
            { 
                this.state.showMessage ? <div className="alert alert-success alert-dismissible fade show" role="alert">{this.state.messageCreatedUser}</div>  : ''
            }
            <form>
            <div className="row p-4">
                <div className="col">
                    <input id="newCustomerName" type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col">
                    <input id="newCustomerAddress" type="text" className="form-control" placeholder="Adrress" />
                </div>
            </div>
            <div className="row p-4">
                <div className="col">
                    <input id="newCustomerCreditLimit" type="text" className="form-control" placeholder="Credit limit" />
                </div>
                <div className="col">
                    <input id="newCustomerCreditAvailable" type="text" className="form-control" placeholder="Credit available" />
                </div>
            </div>
            <div className="row p-4">
                <div className="col">
                    <input id="newCustomerPercentageVisit" type="text" className="form-control" placeholder="Percentage visit" />
                </div>
                <div className="col">
                    <select id="newCustomerCity" className="form-control">
                        <option defaultValue disabled>Choose City...</option>
                        {
                            this.state.cities.map( (c, key) => <option key={key} value={c.id}>{c.name}</option> )
                        }
                    </select>
                </div>
            </div>
            <div className="row ml-4">
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                    Create
                </button>
            </div>
            </form>
            </div>
        );
    }
}

export default CreateCustomer;