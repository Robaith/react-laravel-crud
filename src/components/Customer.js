import React, { Component } from 'react'

export class Customer extends Component {
    render() {
        return (
            <tr>
                            <td>1</td>
                            <td>Robaith</td>
                            <td>robaith@gmail.com</td>
                            <td>
                                <button className="mini ui blue button">Edit</button>
                                <button className="mini ui red button">Delete</button>
                            </td>
                        </tr>
        )
    }
}

export default Customer
