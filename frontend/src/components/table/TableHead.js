import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        return (
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Credit Limit</th>
                <th scope="col">Available Credit</th>
                <th scope="col">Visits Percentage</th>
                <th scope="col">createdAt</th>
                <th scope="col">updatedAt</th>
                <th scope="col">City</th>
            </tr>
        );
    }
}

export default TableHead;