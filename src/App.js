import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Profile from './Components/Profile/Profile'
import AdminLogin from './Components/AdminLogin/AdminLogin'
import AdminProfile from "./Components/AdminProfile/AdminProfile";
import ReceptionistProfile from "./Components/ReceptionistProfile/ReceptionistProfile";
import LoginReceptionist from "./Components/ReceptionistLogin/ReceptionistLogin";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <div className="container">
                        <Route exact path="/adminLogin" component={AdminLogin} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/receptionist" component={LoginReceptionist}/>
                        <Route exact path="/admin" component={AdminLogin} />
                        <Route exact path="/receptionistProfile" component={ReceptionistProfile} />
                        <Route exact path="/allUsers" component={AdminProfile} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App