import React, { Component } from 'react'
import MyForm from './MyForm'
import "./app.css"
import CustomerList from './CustomerList'
import axios from 'axios'

class App extends Component {
    state = { 
        customers: [],
        url: "http://localhost/React_Laravel/public/api/customers"
     }

     getCustomers = async () => {
         const customers = await axios.get(this.state.url);
         this.setState(
             {
                 customers: customers.data
             }
         )
    }

    componentDidMount() {
        this.getCustomers();
    }
    render() { 
        return ( 
            <div>

                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item" >
                            Test Text
                        </a>
                    </div>
                </div>
                <div className="ui main container">
                    <MyForm />
                    <CustomerList customers={this.state.customers} />
                </div>
            </div>
         );
    }
}
 
export default App;