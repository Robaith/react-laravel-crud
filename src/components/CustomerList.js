import React, { Component } from 'react'
import Customer from './Customer'

export class CustomerList extends Component {
    render() {
        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Customer />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerList
