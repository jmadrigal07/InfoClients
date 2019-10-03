import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableBody extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>
                    <Link to={`/customers/${this.props.id}`}>
                        {this.props.name}
                    </Link>
                </td>
                <td>{this.props.address}</td>
                <td>{this.props.credit_limit}</td>
                <td>{this.props.available_credit}</td>
                <td>{this.props.visits_percentage}</td>
                <td>{this.props.createdAt}</td>
                <td>{this.props.updatedAt}</td>
                <td>{this.props.city}</td>
            </tr>
        );
    }
}

export default TableBody;