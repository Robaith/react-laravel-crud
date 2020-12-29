import React, { Component } from 'react'
import MyForm from './MyForm'
import "./app.css"
import CustomerList from './CustomerList'

class App extends Component {
    state = {  }
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
                    <CustomerList />
                </div>
            </div>
         );
    }
}
 
export default App;