import React, { Component } from 'react'

export class Customer extends Component {
    render() {
        const {id, first_name, last_name, email} = this.props.customer
        return (
            <tr>
                            <td>{id}</td>
                            <td>{`${first_name} ${last_name}`}</td>
                            <td>{email}</td>
                            <td>
                                <button className="mini ui blue button">Edit</button>
                                <button className="mini ui red button">Delete</button>
                            </td>
                        </tr>
        )
    }
}

export default Customer
